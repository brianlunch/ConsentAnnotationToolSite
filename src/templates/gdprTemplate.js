var gdprTemplate = 
`
<br/>
<h1>GDPR violations by {{url}}</h1> 
<br/>
<p>This report highlights the violations of GDPR clauses found in the consent dialogue box on the website <a target="_blank" href={{url}}>{{url}}</a> as of {{time}}.</p>
<br/>
<div className =\"boxBorder\"> 
{{#boxes}}
<h1>{{number}} - {{domain}}- GDPR</h1> 
<br/> 
{{#issues}} 
<h3>Issue Name: {{name}}</h3> 
<p>User Comments:{{cmnt}}</p> 

<ul> 
{{#laws}} 
<li> 
<h5>Law Name: {{lawName}}</h5> 
<p>Law Description: {{lawDescription}}</p> 
</li> 
{{/laws}} 
</ul> 
{{/issues}} 
{{/boxes}} 
</div>
`;

export default gdprTemplate;