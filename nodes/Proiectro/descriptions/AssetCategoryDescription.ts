import type { INodeProperties } from 'n8n-workflow';

export const assetCategoryOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['assetCategory'] },
		},
		options: [
			{
				name: 'List All',
				value: 'list',
				action: 'List all asset categories',
				description: 'List all asset categories',
			},
		],
		default: 'list',
	},
];

export const assetCategoryFields: INodeProperties[] = [
];
