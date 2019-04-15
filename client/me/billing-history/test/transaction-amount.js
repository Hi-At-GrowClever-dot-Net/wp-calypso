/**
 * @format
 * @jest-environment jsdom
 */
/**
 * External dependencies
 */
import React from 'react';
import { mount } from 'enzyme';

/**
 * Internal dependencies
 */
import TransactionAmount from '../transaction-amount';

describe( 'TransactionAmount', () => {
	const transaction = {
		subtotal: '$36.00',
		tax: '$2.48',
		amount: '$38.48',
		items: [
			{
				raw_tax: 2.48,
			},
		],
	};

	const upcoming = { amount: '€38.48' };

	test( 'amount class', () => {
		const wrapper = mount( <TransactionAmount amount="$38.49" tax="$1.23" /> );
		expect( wrapper.find( '.billing-history__transaction-amount' ) ).toHaveLength( 1 );
	} );

	test( 'tax class', () => {
		const wrapper = mount( <TransactionAmount amount="$38.49" tax="$1.23" /> );
		expect( wrapper.find( '.billing-history__transaction-amount-tax' ) ).toHaveLength( 1 );
	} );

	test( 'tax exempt no tax div', () => {
		const wrapper = mount( <TransactionAmount amount="$38.49" tax="$1.23" exempt={ true } /> );
		expect( wrapper.find( 'div.billing-history__transaction-amount-tax' ) ).toHaveLength( 0 );
	} );

	test( 'amount', () => {
		const wrapper = mount( <TransactionAmount amount="$38.49" tax="$1.23" /> );
		expect(
			wrapper
				.find( 'div' )
				.first()
				.text()
		).toContain( '$38.49' );
	} );

	test( 'tax', () => {
		const wrapper = mount( <TransactionAmount amount="$38.49" tax="$1.23" /> );
		expect(
			wrapper
				.find( 'div' )
				.last()
				.text()
		).toContain( '$1.23' );
	} );

	test( 'tax exempt', () => {} );
	test( 'tax inclusive', () => {} );
	test( 'tax exclusive', () => {} );
	test( 'tax applicable', () => {} );
} );