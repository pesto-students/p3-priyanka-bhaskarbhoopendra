When we enter an URL in browser there is a lot that happens at background, we will start with initial understanind of what actually browsers are and then we will look into behind process that happens when we enter a URL while sipping our favuorite coffee.

I will categories this in two part, in first part we will discus about basics of browser performing some events to redner data and in second part I will show how does it do all the rendering and parsing.

BROWSERS- The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content. The location of the resource is specified by the user using a URI (Uniform Resource Identifier).

What happens when you enter the URL?

Before discussing this there is one important aspects that we need to look and those are Websites, server and IP Address, websites are basically collection of file often HTML, CSS, Javascript and images.A powerfull external computer connected to internet is called where we host our APIs. Each device on the internet - servers, smart phone other smart devices have unique address called IP address, an IP contains four number parts.

1. You type https://www.pesto.tech/teachable

   scheme
   https:// is a scheme, http stands for hyper text transfer protocol. This scheme tells the browser to make a connection to the server using Transport Layer Security, or TLS. TLS is an encryption protocol to secure communications over the Internet. With HTTPS, the data exchanged between your browser and the server, like passwords or credit card info, is encrypted.

   Domain
   pesto.tech is the domain name of the site. It is the memorable address and points to a specific server’s IP address

   Path
   Sometimes there is an additional path to the resource in the URL. For example, for this URL,
   https://www.pesto.tech/teachable, the-path-to is the path on the server to the requested resource, teachable You can think of this like the directory structure of files and other directories on your computer.

   Resource
   When you typed this URL into your browser, teachable is the name of the resource on the website you want to view. Sometimes you’ll see this with a file extension like .html which indicates this is a static file on the server with HTML content.

2. Browser looks up IP address for the domain

   After you’ve typed the URL into your browser and pressed enter, the browser needs to figure out which server on the Internet to connect to. To do that, it needs to look up the IP address of the server hosting the website using the domain you typed in. It does this using a DNS lookup.

   DNS data is cached at different layers between your browser and at various places across the Internet. Your browser checks its own cache, the operating system cache, a local network cache at your router, and a DNS server cache on your corporate network or at your internet service provider (ISP). If the browser cannot find the IP address at any of those cache layers, the DNS server on your corporate network or at your ISP does a recursive DNS lookup.
   Once the browser gets the DNS record with the IP address, it’s time for it to find the server on the Internet and establish a connection.

3. Browser initiates TCP connection with the server

   Using the public Internet routing infrastructure, packets from a client browser request get routed through the router, the ISP, through an internet exchange to switch ISPs or networks, all using transmission control protocol, more commonly known as TCP, to find the server with the IP address to connect to

4. Browser sends the HTTP request to the server

   Now that the browser has a connection to the server, it follows the rules of communication for the HTTP(s) protocol. It starts with the browser sending an HTTP request to the server to request the contents of the page. The HTTP request contains a request line, headers (or metadata about the request), and a body.

5. Server processes request and sends back a response

   The server takes the request and based on the info in the request line, headers, and body, decides how to process the request.

6. Browser renders the content

   Once the browser has received the response from the server, it inspects the response headers for information on how to render the resource. The Content-Type header above tells the browser it received an HTML resource in the response body. Lucky for us, the browser knows what to do with HTML!

Now if we talk about inner functionality of browser of how it exactly renders the data and convert it to readable form then we need to look into depth of browser working whihc includes a lot of things

1. The Browser High level structure

   User Interface - his includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page

   Browsing engine - marshals actions between the UI and the rendering engine.

   Rendering Engine- responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

   Networking - for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

   UI backend - used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

   Javascript Entrepeter - Used to parse and execute JavaScript code.

   Data storage - . This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage.

2. Parsing

   Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.

   HTML parser - The job of the HTML parser is to parse the HTML markup into a parse tree.

3. Script Processor
   The scripts in the Process pages are processed in the following order: Pre-Process page and Process page.

   Execution Stages
   Activation
   Generation
   Processing
   Completion

4. Painting
   It basically happens when something changes on the DOM or CSSOM, browser paining can happen even without any changes to the DOM and/or CSSOM. CSS animations can trigger a lot of painting for browser

5. Layout
   The layout (also called reflow) peace will be in charge to calculate the positions and dimensions of each node on the screen. For instance, if you rotate your phone, or if you resize your browser, the layout peace will be executed
