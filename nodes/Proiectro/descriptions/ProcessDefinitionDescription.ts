import type { INodeProperties } from 'n8n-workflow';

export const processDefinitionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['processDefinition'] },
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get a process definition',
				description: 'Get a single process definition by ID',
			},
			{
				name: 'List All',
				value: 'list',
				action: 'List all process definitions',
				description: 'List all process definitions',
			},
		],
		default: 'get',
	},
];

export const processDefinitionFields: INodeProperties[] = [
	{
		displayName: 'Process Name or ID',
		name: 'process_id',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getProcesses',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['processDefinition'],
				operation: ["get"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
];
