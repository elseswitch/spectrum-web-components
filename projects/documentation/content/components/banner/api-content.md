---
layout: partial.njk
title: 'Banner: Spectrum Web Components'
displayName: Banner
componentName: banner
partType: api
tags:
    - banner
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
<code>corner</code>
</td>

<td class="spectrum-Table-cell">
<code>corner</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">
Determines if banner sets position at upper right corner or not.
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
<code>type</code>
</td>

<td class="spectrum-Table-cell">
<code>type</code>
</td>

<td class="spectrum-Table-cell">
<code>"info" | "warning" | "error"</code>
</td>

<td class="spectrum-Table-cell">
<code>"info"</code>
</td>

<td class="spectrum-Table-cell">
Determines the style, can be "info", "warning", or "error". Default is "info"
</td>

</tr>

</tbody>
</table>
</div>
    

<h2>Slots</h2>
<div class="table-container">
<table class="spectrum-Table">
<thead class="spectrum-Table-head">
<tr>

<th class="spectrum-Table-headCell">
Name
</th>

<th class="spectrum-Table-headCell">
Description
</th>

</tr>
</thead>
<tbody class="spectrum-Table-body">

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>content</code>
</td>

<td class="spectrum-Table-cell">
Secondary message of the banner. Used to provide a description.
</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>header</code>
</td>

<td class="spectrum-Table-cell">
Primary message of the banner.
</td>

</tr>

</tbody>
</table>
</div>
    

