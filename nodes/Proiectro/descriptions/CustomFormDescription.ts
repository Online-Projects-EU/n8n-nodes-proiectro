import type { INodeProperties } from 'n8n-workflow';

export const customFormOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['customForm'] },
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get a custom form',
				description: 'Get a form\'s definition',
			},
			{
				name: 'Get Submission',
				value: 'get_submission',
				action: 'Get a form submission',
				description: 'Get a single submission with its values',
			},
			{
				name: 'List All',
				value: 'list',
				action: 'List all custom forms',
				description: 'List custom forms',
			},
			{
				name: 'List Submissions',
				value: 'list_submissions',
				action: 'List form submissions',
				description: 'List a form\'s submissions',
			},
			{
				name: 'Submit',
				value: 'submit',
				action: 'Submit a custom form',
				description: 'Submit a filled-in form (field values as JSON)',
			},
			{
				name: 'Update Submission Status',
				value: 'update_submission_status',
				action: 'Update the status of a submission',
				description: 'Change a submission\'s status',
			},
		],
		default: 'get',
	},
];

export const customFormFields: INodeProperties[] = [
	{
		displayName: 'Form Name or ID',
		name: 'form_id',
		type: 'options',
		required: true,
		typeOptions: {
			loadOptionsMethod: 'getCustomForms',
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['customForm'],
				operation: ["get", "submit", "list_submissions"],
			},
		},
		description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
	},
	{
		displayName: 'Data',
		name: 'data',
		type: 'json',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['customForm'],
				operation: ["submit"],
			},
		},
	},
	{
		displayName: 'Submission ID',
		name: 'submission_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['customForm'],
				operation: ["get_submission", "update_submission_status"],
			},
		},
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		required: true,
		options: [
			{ name: 'Archived', value: 'archived' },
			{ name: 'New', value: 'new' },
			{ name: 'Reviewed', value: 'reviewed' },
		],
		default: 'new',
		displayOptions: {
			show: {
				resource: ['customForm'],
				operation: ["update_submission_status"],
			},
		},
	},
];
