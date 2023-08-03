/* eslint-disable prefer-const */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */

import fs from 'fs';
import path from 'path';
import { load } from 'ts-dotenv';

const formatCode = function (unformattedCode: any | string): any {
	try {
		const lines = unformattedCode.split('\n');
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		let maxLengths: any = [];
		let insideModelBlock = false;

		// calculate max lengths for each column
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i].trim();

			if (insideModelBlock && !line.includes('}')) {
				const words = line.split(/\s+/);
				for (let j = 0; j < words.length; j++) {
					if (maxLengths[j] === undefined) {
						maxLengths[j] = words[j].length;
					} else if (words[j].length > maxLengths[j]) {
						maxLengths[j] = words[j].length;
					}
				}
			}
			if (line.startsWith('model')) insideModelBlock = true;
			if (line.includes('}')) insideModelBlock = false;
		}

		// construct the formatted code
		let formattedCode: any = '';
		let formattedCodeBuild: any = '';

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i].trim();

			let formattedLine = '';

			if (line.includes('import')) {
				let adding = `${line}`;
				if (
					i + 1 < lines.length &&
					(lines[i + 1].includes('import') || (lines.length && lines[i + 1].includes('model')))
				) {
					adding += '\n';
				}
				formattedCode += adding;
			} else if (line.includes('model')) {
				let adding = `\n${line}`;
				formattedCode += adding;
				formattedCodeBuild += adding;
			} else if (line.includes('}')) {
				let adding = `${line}`;
				if (i + 1 < lines.length && lines[i + 1].includes('model')) {
					adding += `\n\n${line.trim()}\n`;
				}
				formattedCode += adding;
				formattedCodeBuild += adding;
			} else if (line.includes('@@schema')) {
				formattedCode += `\n    ${line}\n`;
				formattedCodeBuild += `\n    ${line}\n`;
			} else {
				const words = line.split(/\s+/);
				for (let j = 0; j < words.length; j++) {
					try {
						formattedLine += words[j] + ' '.repeat(maxLengths[j] - words[j].length + 1);
					} catch (error) {
						/* empty */
					}
				}
				if (!line || /^\s*$/.test(line) || line == '') {
					formattedCodeBuild += '\n';
					formattedCode += '\n';
				} else {
					formattedCodeBuild += '    ' + formattedLine.trim() + '\n';
					formattedCode += '    ' + formattedLine.trim() + '\n';
				}
			}
		}

		return { formattedCode, formattedCodeBuild };
	} catch (error) {
		console.error('An error occurred while formatting the code:', error);
		return NaN; // Return the original code in case of an error
	}
};
// import { DB_SCHEMAS } from '$env/static/private';
const { DB_SCHEMAS } = load({
	DB_SCHEMAS: String
});

const pre = `
generator client {
    provider        = "prisma-client-js"
    previewFeatures = [ "multiSchema" ]
}

datasource db {
    provider = "postgresql"
    url      = env("DATABASE")
    schemas  = [${DB_SCHEMAS?.split(' ').map((e: any) => ` "${e}" `)}]
}

`;

let isSubdirectoryCommented = false;
function readPrismaFiles(directory: string, parentDir = '') {
	const results: any = [];

	const files = fs.readdirSync(directory);
	for (const file of files) {
		const filePath = path.join(directory, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			const subDir = path.join(parentDir, file);
			const subDirComment = `// ${subDir}`;

			if (!isSubdirectoryCommented) {
				if (results.includes(subDirComment)) {
					isSubdirectoryCommented = !isSubdirectoryCommented;
				} else {
					results.push(`\n${subDirComment}`);
				}
			}

			results.push(...readPrismaFiles(filePath, subDir));
		} else if (path.extname(filePath) === '.prisma') {
			const content = fs.readFileSync(filePath, 'utf8');
			const { formattedCode, formattedCodeBuild } = formatCode(content);
			results.push(formattedCodeBuild);
			fs.writeFileSync(filePath, formattedCode, 'utf8');
		}
	}

	return results;
}

function writeToFile(content: string, filePath: string) {
	fs.writeFileSync(filePath, content, 'utf8');
}

const prismaFolder = './prisma';
const outputFilePath = './prisma/schema.prisma';

try {
	fs.unlinkSync(outputFilePath);
} catch (error) {
	writeToFile('', outputFilePath);
}

const prismaFilesContent = readPrismaFiles(prismaFolder);
const mergedContent = prismaFilesContent.join('\n').trim();

writeToFile(pre + mergedContent, outputFilePath);
console.log('Prisma schema file created successfully.');
