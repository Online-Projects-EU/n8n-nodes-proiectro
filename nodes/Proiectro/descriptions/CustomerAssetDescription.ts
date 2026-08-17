import type { INodeProperties } from 'n8n-workflow';

export const customerAssetOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['customerAsset'] },
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a customer asset',
				description: 'Create a new customer asset',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a customer asset',
				description: 'Delete a customer asset',
			},
			{
				name: 'List',
				value: 'list',
				action: 'List customer assets',
				description: 'List assets for a customer',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a customer asset',
				description: 'Update a customer asset',
			},
		],
		default: 'create',
	},
];

export const customerAssetFields: INodeProperties[] = [
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
				resource: ['customerAsset'],
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
				resource: ['customerAsset'],
				operation: ["create"],
			},
		},
	},
	{
		displayName: 'Category Name or ID',
		name: 'category',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getAssetCategories',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['customerAsset'],
				operation: ["create", "update"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['customerAsset'],
				operation: ["create", "update"],
			},
		},
	},
	{
		displayName: 'Asset ID',
		name: 'asset_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['customerAsset'],
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
				resource: ['customerAsset'],
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
				resource: ['customerAsset'],
				operation: ["delete"],
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
				resource: ['customerAsset'],
				operation: ["create"],
			},
		},
		options: [
			{
				displayName: 'Customer Location',
				name: 'customer_location',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Installation Date',
				name: 'installation_date',
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
				displayName: 'Is Customer Visible',
				name: 'is_customer_visible',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Parent',
				name: 'parent',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Product',
				name: 'product',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Project Name or ID',
				name: 'project',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getProjects',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
			{
				displayName: 'Serial Number Or Uri',
				name: 'serial_number_or_uri',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Warranty Expiration',
				name: 'warranty_expiration',
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
				resource: ['customerAsset'],
				operation: ["update"],
			},
		},
		options: [
			{
				displayName: 'Customer Location',
				name: 'customer_location',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Installation Date',
				name: 'installation_date',
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
				displayName: 'Is Customer Visible',
				name: 'is_customer_visible',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Parent',
				name: 'parent',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Product',
				name: 'product',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Project Name or ID',
				name: 'project',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getProjects',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
			{
				displayName: 'Serial Number Or Uri',
				name: 'serial_number_or_uri',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Warranty Expiration',
				name: 'warranty_expiration',
				type: 'string',
				default: '',
			},
		],
	},
];
