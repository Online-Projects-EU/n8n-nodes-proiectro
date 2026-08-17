import type { INodeProperties } from 'n8n-workflow';

export const commentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['comment'] },
		},
		options: [
			{
				name: 'Add to Operational Item',
				value: 'add_operational',
				action: 'Comment on an operational work item',
				description: 'Comment on an operational work item',
			},
			{
				name: 'Add to Work Item',
				value: 'add_work_item',
				action: 'Comment on a work item',
				description: 'Comment on a project work item',
			},
			{
				name: 'Delete Operational Item Comment',
				value: 'delete_operational',
				action: 'Delete an operational work item comment',
				description: 'Delete a comment from an operational work item',
			},
			{
				name: 'Delete Work Item Comment',
				value: 'delete_work_item',
				action: 'Delete a work item comment',
				description: 'Delete a comment from a project work item',
			},
			{
				name: 'Edit Operational Item Comment',
				value: 'edit_operational',
				action: 'Edit an operational work item comment',
				description: 'Edit a comment on an operational work item',
			},
			{
				name: 'Edit Work Item Comment',
				value: 'edit_work_item',
				action: 'Edit a work item comment',
				description: 'Edit a comment on a project work item',
			},
			{
				name: 'List Operational Item Comments',
				value: 'list_operational',
				action: 'List operational work item comments',
				description: 'List the comments on an operational work item (paged)',
			},
			{
				name: 'List Work Item Comments',
				value: 'list_work_item',
				action: 'List work item comments',
				description: 'List the comments on a project work item (paged)',
			},
		],
		default: 'add_operational',
	},
];

export const commentFields: INodeProperties[] = [
	{
		displayName: 'Work Item ID',
		name: 'work_item_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ["list_work_item", "add_work_item"],
			},
		},
	},
	{
		displayName: 'Page Number',
		name: 'page_number',
		type: 'number',
		required: true,
		default: 0,
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ["list_work_item", "list_operational"],
			},
		},
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ["add_work_item", "edit_work_item", "add_operational", "edit_operational"],
			},
		},
	},
	{
		displayName: 'Comment ID',
		name: 'comment_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ["edit_work_item", "delete_work_item", "edit_operational", "delete_operational"],
			},
		},
	},
	{
		displayName: 'Item ID',
		name: 'item_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ["list_operational"],
			},
		},
	},
	{
		displayName: 'Operational Work Item ID',
		name: 'operational_work_item_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['comment'],
				operation: ["add_operational"],
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
				resource: ['comment'],
				operation: ["add_work_item"],
			},
		},
		options: [
			{
				displayName: 'Parent Name or ID',
				name: 'parent_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getCustomers',
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
				resource: ['comment'],
				operation: ["add_operational"],
			},
		},
		options: [
			{
				displayName: 'Parent Name or ID',
				name: 'parent_id',
				type: 'options',
				typeOptions: {
					loadOptionsMethod: 'getCustomers',
				},
				default: '',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
			},
		],
	},
];
