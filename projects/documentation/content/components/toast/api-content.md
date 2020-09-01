---
layout: partial.njk
title: 'Toast: Spectrum Web Components'
displayName: Toast
componentName: toast
partType: api
tags:
    - toast
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
<code>open</code>
</td>

<td class="spectrum-Table-cell">
<code>open</code>
</td>

<td class="spectrum-Table-cell">
<code>boolean</code>
</td>

<td class="spectrum-Table-cell">
<code>false</code>
</td>

<td class="spectrum-Table-cell">

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
<code>timeout</code>
</td>

<td class="spectrum-Table-cell">
<code>timeout</code>
</td>

<td class="spectrum-Table-cell">
<code>number | null</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">

</td>

</tr>

<tr class="spectrum-Table-row">

<td class="spectrum-Table-cell">
<code>variant</code>
</td>

<td class="spectrum-Table-cell">
<code>variant</code>
</td>

<td class="spectrum-Table-cell">
<code>ToastVariants</code>
</td>

<td class="spectrum-Table-cell">
<code></code>
</td>

<td class="spectrum-Table-cell">
The variant applies specific styling when set to `negative`, `positive`, `info`, `error`, or `warning`.
`variant` attribute is removed when not matching one of the above.
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
<code></code>
</td>

<td class="spectrum-Table-cell">
The toast content
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
<code>close</code>
</td>

</tr>

</tbody>
</table>
</div>
    