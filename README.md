<h1>#Getting started</h1>
<p>Download and link in your <b>&lt;head&gt;</b> section MessageSystem.css and MessageSystem.js</p>

<pre>
<code>
&lt;link rel="stylesheet" href="MessageSystem.css"/&gt;
&lt;script type="text/javascript" src="MessageSystem.js"&gt; &lt;/script&gt;
</code>
</pre>

<h1>#Usage</h1>
<p>Now you can use MessageSystem object under <b>ms</b> variable. You can specify type of notification and message what you want to display. Notification will apeard for 10 sec. - for example let's create error notification:</p>

<pre>
<code>
ms.Notification({
    type : "error",
    message: 'This is error notification. Please contact with <a href="">Help center</a>'
});
</code>
</pre>

<p>Or success notification:</p>

<pre>
<code>	
ms.Notification({
    type : "success",
    message: "This is success notification! Congratulations"
});
</code>
</pre>