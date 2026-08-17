import type { INodeProperties } from 'n8n-workflow';

export const leadListOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['leadList'] },
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a lead list',
				description: 'Create a lead list',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a lead list',
				description: 'Delete a lead list',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a lead list',
				description: 'Get a lead list with its leads',
			},
			{
				name: 'List All',
				value: 'list',
				action: 'List all lead lists',
				description: 'List lead lists (yours, others\', and shared pools)',
			},
			{
				name: 'Reassign',
				value: 'reassign',
				action: 'Reassign a lead list',
				description: 'Reassign a lead list to another owner, optionally cascading to its leads',
			},
			{
				name: 'Reassign Leads',
				value: 'reassign_leads',
				action: 'Reassign the leads in a list',
				description: 'Reassign the leads in a list from one owner to another',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a lead list',
				description: 'Update a lead list',
			},
		],
		default: 'create',
	},
];

export const leadListFields: INodeProperties[] = [
	{
		displayName: 'Lead List ID',
		name: 'lead_list_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['leadList'],
				operation: ["get", "update", "delete", "reassign", "reassign_leads"],
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
				resource: ['leadList'],
				operation: ["create", "update"],
			},
		},
	},
	{
		displayName: 'Updated At',
		name: 'updated_at',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['leadList'],
				operation: ["update", "delete", "reassign"],
			},
		},
	},
	{
		displayName: 'To Owner',
		name: 'to_owner',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['leadList'],
				operation: ["reassign_leads"],
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
				resource: ['leadList'],
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
				displayName: 'Instructions',
				name: 'instructions',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Is Active',
				name: 'is_active',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Owner Name or ID',
				name: 'owner',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
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
				resource: ['leadList'],
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
				displayName: 'Instructions',
				name: 'instructions',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Is Active',
				name: 'is_active',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Owner Name or ID',
				name: 'owner',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
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
				resource: ['leadList'],
				operation: ["reassign"],
			},
		},
		options: [
			{
				displayName: 'Cascade To Leads',
				name: 'cascade_to_leads',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'Owner Name or ID',
				name: 'owner',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getMembers',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
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
				resource: ['leadList'],
				operation: ["reassign_leads"],
			},
		},
		options: [
			{
				displayName: 'From Owner',
				name: 'from_owner',
				type: 'string',
				default: '',
			},
		],
	},
];
