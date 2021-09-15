var defaultTemplate = 
`
<br/>
<h1>Issues Identified on {{url}}</h1> 
<br/>
<p>This report highlights the issues found in the consent dialogue box on the website <a target="_blank" href={{url}}>{{url}}</a> as of {{time}}.</p>
<br/>

{{#boxes}}
<div>
{{#issues}}
<h4>Issue: {{name}}</h4>
<p>Refer to Annotation#{{number}} in screenshot.<p>
{{#cmnt_available}}<p>User Comments:{{cmnt}}</p>{{/cmnt_available}}
<p><b>Relevant legal clauses for this issue:</b>
<ul> 
    {{#laws}} 
    <li>{{lawName}} - {{lawDescription}}</li> 
    {{/laws}} 
</ul> 
{{/issues}}
</div> 
{{/boxes}} 

`;

export default defaultTemplate;