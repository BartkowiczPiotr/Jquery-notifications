<h1>#Getting started</h1>
                <p>Download and link in your <b>&lt;head&gt;</b> section MessageSystem.css and MessageSystem.js</p>
                <div class="code-block">
                    <pre class="language-markup">
                        <code class="language-HTML">
                                &lt;link rel="stylesheet" href="MessageSystem.css"/&gt;
                                &lt;script type="text/javascript" src="MessageSystem.js"&gt; &lt;/script&gt;
                        </code>
                    </pre>
                </div>
                <h1>#Usage</h1>
                <p>Now you can use MessageSystem object. You can specify type of notification, message what you want to display and mode (for this moment you can use only notification mode). Notyfication will apeard for 10 sec. - for example let's create error notification:</p>
                <div class="code-block">
                    <pre>
                        <code class="language-js">	
                            const message = new MessageSystem({
                                 mode : "notification",
                                 type : "error",
                                 message: 'This is error notification. Please contact with &lt;a href=""&gt;Help center&lt;/a&gt;'
                            });
                                
                            message.showMessage();
                        </code>
                    </pre>
                </div>
                <p>Or success notification:</p>
                <div class="code-block">
                    <pre>
                        <code class="language-js">	
                            const message = new MessageSystem({
                                mode : "notification",
                                 type : "success",
                                message: 'This is success notification! Congratulations'
                            });
                                
                            message.showMessage();
                        </code>
                    </pre>
                </div>