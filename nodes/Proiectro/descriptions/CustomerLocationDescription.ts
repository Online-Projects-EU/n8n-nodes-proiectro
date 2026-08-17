import type { INodeProperties } from 'n8n-workflow';

export const customerLocationOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['customerLocation'] },
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a customer location',
				description: 'Link a customer to a location',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a customer location',
				description: 'Remove a customer from a location',
			},
			{
				name: 'List',
				value: 'list',
				action: 'List customer locations',
				description: 'List locations for a customer',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a customer location',
				description: 'Update a customer location',
			},
		],
		default: 'create',
	},
];

export const customerLocationFields: INodeProperties[] = [
	{
		displayName: 'Org Name or ID',
		name: 'org_id',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getCustomers',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['customerLocation'],
				operation: ["list"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Customer',
		name: 'customer',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['customerLocation'],
				operation: ["create"],
			},
		},
	},
	{
		displayName: 'Location',
		name: 'location',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['customerLocation'],
				operation: ["create", "update"],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['customerLocation'],
				operation: ["create", "update"],
			},
		},
	},
	{
		displayName: 'Customer Location ID',
		name: 'customer_location_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['customerLocation'],
				operation: ["update", "delete"],
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: ['customerLocation'],
				operation: ["create"],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Internal Code',
				name: 'internal_code',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Is Active',
				name: 'is_active',
				type: 'boolean',
				default: false,
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
				resource: ['customerLocation'],
				operation: ["update"],
			},
		},
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Internal Code',
				name: 'internal_code',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Is Active',
				name: 'is_active',
				type: 'boolean',
				default: false,
			},
		],
	},
];
