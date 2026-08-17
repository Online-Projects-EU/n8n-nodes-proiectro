import type { INodeProperties } from 'n8n-workflow';

export const paymentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: { resource: ['payment'] },
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a payment',
				description: 'Create a new payment record',
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a payment',
				description: 'Delete a payment',
			},
			{
				name: 'Mark Paid',
				value: 'mark_paid',
				action: 'Mark a payment as paid',
				description: 'Mark a payment as paid',
			},
			{
				name: 'Mark Unpaid',
				value: 'mark_unpaid',
				action: 'Mark a payment as unpaid',
				description: 'Mark a payment as unpaid',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a payment',
				description: 'Update an existing payment',
			},
		],
		default: 'create',
	},
];

export const paymentFields: INodeProperties[] = [
	{
		displayName: 'Payment Schedule Block ID',
		name: 'payment_schedule_block_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['payment'],
				operation: ["create"],
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
				resource: ['payment'],
				operation: ["create"],
			},
		},
	},
	{
		displayName: 'Due Date',
		name: 'due_date',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['payment'],
				operation: ["create"],
			},
		},
	},
	{
		displayName: 'Payment ID',
		name: 'payment_id',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['payment'],
				operation: ["update", "mark_paid", "mark_unpaid", "delete"],
			},
		},
	},
	{
		displayName: 'Paid Date',
		name: 'paid_date',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['payment'],
				operation: ["mark_paid"],
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
				resource: ['payment'],
				operation: ["create"],
			},
		},
		options: [
			{
				displayName: 'Amount',
				name: 'amount',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Internal Code',
				name: 'internal_code',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Payment Integration ID',
				name: 'payment_integration_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Product ID',
				name: 'product_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Show Sources',
				name: 'show_sources',
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
				resource: ['payment'],
				operation: ["update"],
			},
		},
		options: [
			{
				displayName: 'Amount',
				name: 'amount',
				type: 'number',
				default: 0,
			},
			{
				displayName: 'Due Date',
				name: 'due_date',
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
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Payment Integration ID',
				name: 'payment_integration_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Product ID',
				name: 'product_id',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Show Sources',
				name: 'show_sources',
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
				resource: ['payment'],
				operation: ["mark_paid"],
			},
		},
		options: [
			{
				displayName: 'Payment Integration ID',
				name: 'payment_integration_id',
				type: 'string',
				default: '',
			},
		],
	},
];
