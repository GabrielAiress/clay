/**
 * SPDX-FileCopyrightText: © 2022 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React, {ElementType} from 'react';

export type TextSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type DisplayType = 'p' | 'span';

export type WeightFont =
	| 'lighter'
	| 'light'
	| 'normal'
	| 'semi-bold'
	| 'bold'
	| 'bolder';

export type ColorType =
	| null
	| 'primary'
	| 'secondary'
	| 'muted'
	| 'success'
	| 'warning'
	| 'danger'
	| 'info';

type Props = {
	/**
	 * Determine the way in which a text is displayed.
	 */

	as?: DisplayType;

	/**
	 * Determine the color text.
	 */

	displayType?: ColorType;

	/**
	 * Set the text in italic style.
	 */
	italic?: boolean;

	/**
	 * Number to set the text size.
	 */
	size?: TextSize;

	/**
	 * Set the text in truncate style.
	 */
	truncate?: boolean;

	/**
	 * Determines the weight of the font.
	 */
	weight?: WeightFont;
};

export const Text: React.FC<Props> = ({
	as = 'span',
	children,
	displayType,
	italic,
	size = 4,
	truncate,
	weight,
}) => {
	const TextTag = as as ElementType;

	return (
		<TextTag
			className={classNames([`text-${size}`], {
				[`text-${displayType}`]: displayType,
				['font-italic']: italic,
				['text-truncate']: truncate,
				[`font-weight-${weight}`]: weight,
			})}
		>
			{children}
		</TextTag>
	);
};

Text.displayName = 'Text';
