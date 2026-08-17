import type { INodeProperties } from 'n8n-workflow';

export const resourceOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['resource'] },
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a resource',
				description: 'Create a new resource',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a resource',
				description: 'Delete a resource',
			},
			{
				name: 'List All',
				value: 'list',
				action: 'List all resources',
				description: 'List all resources in the workspace',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a resource',
				description: 'Update a resource',
			},
		],
		default: 'create',
	},
];

export const resourceFields: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['resource'],
				operation: ["create", "update"],
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['resource'],
				operation: ["create", "update"],
			},
		},
	},
	{
		displayName: 'Timezone',
		name: 'timezone',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['resource'],
				operation: ["create", "update"],
			},
		},
	},
	{
		displayName: 'Resource ID',
		name: 'resource_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['resource'],
				operation: ["update", "delete"],
			},
		},
	},
	{
		displayName: 'Delete Descendants',
		name: 'delete_descendants',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['resource'],
				operation: ["delete"],
			},
		},
	},
	{
		displayName: 'Reparent ID',
		name: 'reparent_id',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['resource'],
				operation: ["delete"],
			},
		},
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: {
			show: {
				resource: ['resource'],
				operation: ["list"],
			},
		},
		options: [
			{
				displayName: 'Internal Code',
				name: 'internal_code',
				type: 'string',
				default: '',
				description: 'Filter by exact internal code',
			},
			{
				displayName: 'Is Bookable',
				name: 'is_bookable',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter by resource name',
			},
			{
				displayName: 'Search',
				name: 'search',
				type: 'string',
				default: '',
				description: 'Search by name or internal code',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['resource'],
				operation: ["create"],
			},
		},
		options: [
			{
				displayName: 'Internal Code',
				name: 'internal_code',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Parent',
				name: 'parent',
				type: 'string',
				default: '',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['resource'],
				operation: ["update"],
			},
		},
		options: [
			{
				displayName: 'Internal Code',
				name: 'internal_code',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Parent',
				name: 'parent',
				type: 'string',
				default: '',
			},
		],
	},
];
