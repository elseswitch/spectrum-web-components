---
layout: partial.njk
title: 'Radio: Spectrum Web Components'
displayName: Radio
componentName: radio
partType: api
tags:
    - radio
---

<h2>Attributes and Properties</h2>
<div class="table-container">
<table class="spectrum-Table">
<thead class="spectrum-Table-head">
<tr>

<th class="spectrum-Table-headCell">
Name
</th>

<th class="spectrum-Table-headCell">
Attribute
</th>

<th class="spectrum-Table-headCell">
Type
</th>

<th class="spectrum-Table-headCell">
Default
</th>

<th class="spectrum-Table-headCell">
Description
</th>

</tr>
</thead>
<tbody class="spectrum-Table-body">

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>autofocus</code>
</td>

<td class="spectrum-Table-cell">
<code>autofocus</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">
When this control is rendered, focus it automatically
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>checked</code>
</td>

<td class="spectrum-Table-cell">
<code>checked</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">
Represents when the input is checked
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>disabled</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">
Disable this control. It will not receive focus or events
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>focusElement</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
<code>HTMLElement</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>name</code>
</td>

<td class="spectrum-Table-cell">
<code>name</code>
</td>

<td class="spectrum-Table-cell">
<code>string</code>
</td>

<td class="spectrum-Table-cell">
<code>""</code>
</td>

<td class="spectrum-Table-cell">
Represents the group this radio is a part of
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>shadowRoot</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
<code>ShadowRoot</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>tabIndex</code>
</td>

<td class="spectrum-Table-cell">
<code>tabIndex</code>
</td>

<td class="spectrum-Table-cell">
<code>number</code>
</td>

<td class="spectrum-Table-cell">
<code>0</code>
</td>

<td class="spectrum-Table-cell">
The tab index to apply to this control. See general documentation about
the tabindex HTML property
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>value</code>
</td>

<td class="spectrum-Table-cell">
<code>value</code>
</td>

<td class="spectrum-Table-cell">
<code>string</code>
</td>

<td class="spectrum-Table-cell">
<code>""</code>
</td>

<td class="spectrum-Table-cell">
Identifies this radio button within its radio group
</td>

</tr>

</tbody>
</table>
</div>
    


<h2>Events</h2>
<div class="table-container">
<table class="spectrum-Table">
<thead class="spectrum-Table-head">
<tr>

<th class="spectrum-Table-headCell">
Name
</th>

</tr>
</thead>
<tbody class="spectrum-Table-body">

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>change</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>keydown</code>
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>sp-radio:change</code>
</td>

</tr>

</tbody>
</table>
</div>
    