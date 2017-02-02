/**
 * @typedef {Object} Config - Item configuration
 * @property {Section|Section[]} sections - Item section or sections
 * @property {Correct} correct - Correct answers
 */

/**
 * @typedef {Object} Section - Item section
 * @property {Unit[]} units - Defines the ordered list of units as they appear in the question item.
 */

/**
 * Text Unit
 * @typedef {string} Unit - Simple text wrapped into <span> element
 */
/**
 * @typedef {Object} Unit - Simple text wrapped span element
 * @property {string} type=text
 * @property {string} value - String value
 */
/**
 * @typedef {Object} Unit - Image element
 * @property {string} type=image
 * @property {string} value - Image url
 */
/**
 * @typedef {Object} Unit - Static math expression in MathML/LaTeX format.
 * @property {string} type=mathml|latex
 * @property {string} value - Math expression string
 */
/**
 * @typedef {Object} Unit - Html
 * @property {string} type=html
 * @property {string} value - Html string
 */
/**
 * @typedef {Object} Unit - Multiunit
 * @property {string} type=multi
 * @property {Unit[]} value - Array of units
 */
/**
 * @typedef {Object} Unit - Defines an answer input widget of one of the following types: checkbox, radiobutton, simple text field, text area, math formula input, dropdown field
 * @property {string} type=widget
 * @property {Widget} value - Widget config
 */

/**
 * @typedef {Object} Widget - Textarea
 * @property {string} type=essay
 */
/**
 * @typedef {Object} Widget - Single- or multi- choices widget
 * @property {string} type=mc
 * @property {string} subtype=checkbox|radio
 * @property {boolean} randomOrder - Defines if the answer options will be randomized.
 * @property {boolean} horizontal=false - If TRUE, all the choices will be displayed in one row. Otherwise, the vertical layout will be used and all the choices will be displayed in one column.
 * @property {Choice[]} choices - Choices array
 */
/**
 * @typedef {Object} Widget - Widget with field for text or math input
 * @property {string} type=fitb
 * @property {string} align - Input field align
 * @property {string|number} width - Input field width
 * @property {number} placeholder - Input field placeholder
 */
/**
 * @typedef {Object} Widget - Defines a dropdown input field
 * @property {string} type=dropdown
 * @property {boolean} randomOrder - Defines if the answer options will be randomized.
 * @property {Choice[]} options - Options array
 */

/**
 * @typedef {Object} Choice
 * @property {string} value - Choice value
 * @property {Unit} display - Choice display value
 * @property {string} speech - Choice speech text
 */