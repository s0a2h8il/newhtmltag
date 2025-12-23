// Data Source for all HTML Tags
// This object acts as our "database" for the tutorial content.
const tagsData = [
    // --- Layout Tags ---
    {
        name: "header",
        category: "Structure",
        desc: "The &lt;header&gt; element represents introductory content, typically a group of introductory or navigational aids.",
        syntax: "&lt;header&gt;\n  &lt;h1&gt;Page Title&lt;/h1&gt;\n&lt;/header&gt;",
        preview: "<header style='background:#f0f0f0; padding:10px;'><h1>My Website Header</h1></header>",
        explanation: "Think of this as the top banner of your webpage. It usually contains the logo and main navigation."
    },
    {
        name: "main",
        category: "Structure",
        desc: "The &lt;main&gt; element represents the dominant content of the &lt;body&gt; of a document.",
        syntax: "&lt;main&gt;\n  &lt;p&gt;This is the unique content...&lt;/p&gt;\n&lt;/main&gt;",
        preview: "<main style='border:1px dashed #333; padding:10px;'><p>This represents the main content area of the page.</p></main>",
        explanation: "This is where the 'meat' of your page goes. It holds the core information unique to that specific page."
    },
    {
        name: "footer",
        category: "Structure",
        desc: "The &lt;footer&gt; element represents a footer for its nearest sectioning content or sectioning root element.",
        syntax: "&lt;footer&gt;\n  &lt;p&gt;© 2023 Company Name&lt;/p&gt;\n&lt;/footer&gt;",
        preview: "<footer style='background:#333; color:white; padding:10px; text-align:center;'>© 2025 HTML Tutorial</footer>",
        explanation: "The bottom section of your site. Great for copyright notices, contact info, and related links."
    },
    {
        name: "aside",
        category: "Structure",
        desc: "The &lt;aside&gt; element represents a portion of a document whose content is only indirectly related to the document's main content.",
        syntax: "&lt;aside&gt;\n  &lt;h3&gt;Related Posts&lt;/h3&gt;\n&lt;/aside&gt;",
        preview: "<div style='display:flex;'><article style='width:70%'>Main Article</article><aside style='width:30%; background:#eee; padding:5px;'>Sidebar/Aside</aside></div>",
        explanation: "Often used for sidebars, call-out boxes, or advertising. It's 'aside' from the main content."
    },
    {
        name: "article",
        category: "Structure",
        desc: "The &lt;article&gt; element represents a self-contained composition in a document.",
        syntax: "&lt;article&gt;\n  &lt;h2&gt;Blog Post Title&lt;/h2&gt;\n  &lt;p&gt;Post content...&lt;/p&gt;\n&lt;/article&gt;",
        preview: "<article style='border:1px solid #ccc; padding:10px;'><h2>News Headline</h2><p>This is a self-contained news story.</p></article>",
        explanation: "Use this for blog posts, news stories, or forum comments—anything that makes sense on its own."
    },
    {
        name: "section",
        category: "Structure",
        desc: "The &lt;section&gt; element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it.",
        syntax: "&lt;section&gt;\n  &lt;h2&gt;Chapter 1&lt;/h2&gt;\n  &lt;p&gt;...&lt;/p&gt;\n&lt;/section&gt;",
        preview: "<section style='border:1px solid blue; padding:10px;'><h2>Section Heading</h2><p>Content for this specific section.</p></section>",
        explanation: "A way to group related content together, like chapters in a book."
    },
    {
        name: "div",
        category: "Structure",
        desc: "The &lt;div&gt; (division) element is the generic container for flow content.",
        syntax: "&lt;div class='box'&gt;\n  Content here...\n&lt;/div&gt;",
        preview: "<div style='background:lightblue; padding:20px; text-align:center;'>I am a generic DIV container</div>",
        explanation: "The ultimate 'box'. It has no meaning on its own but is used everywhere to group elements for styling."
    },

    // --- Text Tags ---
    {
        name: "p",
        category: "Text",
        desc: "The &lt;p&gt; element represents a paragraph.",
        syntax: "&lt;p&gt;This is a paragraph of text.&lt;/p&gt;",
        preview: "<p>This is a paragraph. Browsers automatically add some space (margin) before and after it.</p>",
        explanation: "The most common tag for regular text blocks."
    },
    {
        name: "span",
        category: "Text",
        desc: "The &lt;span&gt; element is a generic inline container for phrasing content.",
        syntax: "&lt;p&gt;This is &lt;span style='color:red'&gt;red&lt;/span&gt; text.&lt;/p&gt;",
        preview: "<p>This is normal text, but <span style='color:red; font-weight:bold;'>this part is in a span</span>.</p>",
        explanation: "Like <div> but for small optimizations inside a line of text. Good for coloring specific words."
    },
    {
        name: "br",
        category: "Text",
        desc: "The &lt;br&gt; element produces a line break in text (carriage-return).",
        syntax: "First Line&lt;br&gt;\nSecond Line",
        preview: "First line of text.<br>Second line of text (forced by &lt;br&gt;).",
        explanation: "Forces text to drop to the next line without starting a new paragraph."
    },
    {
        name: "hr",
        category: "Text",
        desc: "The &lt;hr&gt; element represents a thematic break between paragraph-level elements.",
        syntax: "&lt;p&gt;Topic A&lt;/p&gt;\n&lt;hr&gt;\n&lt;p&gt;Topic B&lt;/p&gt;",
        preview: "<p>Section 1</p><hr><p>Section 2</p>",
        explanation: "Draws a horizontal line. Good for separating chapters or topics."
    },
    {
        name: "b / strong",
        category: "Text",
        desc: "&lt;b&gt; is for bold text stylistically. &lt;strong&gt; is for important text (bold).",
        syntax: "&lt;b&gt;Bold&lt;/b&gt; vs &lt;strong&gt;Strong&lt;/strong&gt;",
        preview: "This is <b>bold text</b>. This is <strong>strong text</strong>.",
        explanation: "Both make text fat. Use <strong> when the word is actually important."
    },
    {
        name: "i / em",
        category: "Text",
        desc: "&lt;i&gt; is for italic text. &lt;em&gt; is for emphasized text.",
        syntax: "&lt;i&gt;Italic&lt;/i&gt; vs &lt;em&gt;Emphasis&lt;/em&gt;",
        preview: "This is <i>italic</i>. This is <em>emphasized</em>.",
        explanation: "Both slant the text. Use <em> for things you'd stress in speech."
    },

    // --- Formatting ---
    {
        name: "sub / sup",
        category: "Formatting",
        desc: "Subscript (&lt;sub&gt;) and Superscript (&lt;sup&gt;).",
        syntax: "H&lt;sub&gt;2&lt;/sub&gt;O and E=mc&lt;sup&gt;2&lt;/sup&gt;",
        preview: "Water is H<sub>2</sub>O. Einstein said E=mc<sup>2</sup>.",
        explanation: "Small letters below or above the line. Used for math and chemicals."
    },
    {
        name: "code",
        category: "Formatting",
        desc: "The &lt;code&gt; element displays a short fragment of computer code.",
        syntax: "&lt;p&gt;Type &lt;code&gt;npm install&lt;/code&gt; to start.&lt;/p&gt;",
        preview: "<p>Please run <code>console.log('Hello')</code> in your browser.</p>",
        explanation: "Shows text in a 'robot' font (monospace) to look like computer code."
    },

    // --- Media & Links ---
    {
        name: "a",
        category: "Media",
        desc: "The &lt;a&gt; (anchor) element defines a hyperlink.",
        syntax: "&lt;a href='https://google.com'&gt;Go to Google&lt;/a&gt;",
        preview: "<a href='#' onclick='alert(\"You clicked a link!\"); return false;'>Click Me!</a>",
        explanation: "The magic tag that connects the web. Wraps text to make it clickable."
    },
    {
        name: "img",
        category: "Media",
        desc: "The &lt;img&gt; element embeds an image into the document.",
        syntax: "&lt;img src='image.jpg' alt='Description'&gt;",
        preview: "<div style='background:#ddd; width:100px; height:30px; display:flex; align-items:center; justify-content:center;'>[Image]</div>",
        explanation: "Puts a picture on the page. Needs a 'src' (source) link to work."
    },
    {
        name: "video",
        category: "Media",
        desc: "The &lt;video&gt; element embeds a media player which supports video playback.",
        syntax: "&lt;video src='movie.mp4' controls&gt;&lt;/video&gt;",
        preview: "<div style='background:black; color:white; width:200px; height:80px; display:flex; align-items:center; justify-content:center;'>[Video]</div>",
        explanation: "A built-in video player. You can add play/pause buttons with the 'controls' attribute."
    },
    {
        name: "marquee",
        category: "Media",
        desc: "The &lt;marquee&gt; element creates a scrolling text effect. (Deprecated but fun!)",
        syntax: "&lt;marquee&gt;Scroll me!&lt;/marquee&gt;",
        preview: "<marquee direction='left' style='background:#eee; padding:5px;'>I am scrolling text! This is old school internet.</marquee>",
        explanation: "Makes text move across the screen. Don't use this on serious websites anymore!"
    },

    // --- More Formatting ---
    {
        name: "u / s / del",
        category: "Formatting",
        desc: "&lt;u&gt; is underline, &lt;s&gt; is strikethrough, &lt;del&gt; is deleted text.",
        syntax: "&lt;u&gt;Underline&lt;/u&gt;, &lt;s&gt;Strike&lt;/s&gt;, &lt;del&gt;Deleted&lt;/del&gt;",
        preview: "<u>Underline</u> <s>Strikethrough</s> <del>Deleted</del>",
        explanation: "Different ways to mark text as removed or highlighted directly."
    },
    {
        name: "pre",
        category: "Formatting",
        desc: "The &lt;pre&gt; element defines preformatted text.",
        syntax: "&lt;pre&gt;\n  Text    keep    spaces\n&lt;/pre&gt;",
        preview: "<pre style='background:#eee; border:1px solid #999;'>  This text    keeps\n  all its    spacing.</pre>",
        explanation: "Preserves your spaces and line breaks exactly as you type them."
    },
    {
        name: "q / cite / abbr",
        category: "Formatting",
        desc: "Quotes &lt;q&gt;, Citations &lt;cite&gt;, Abbreviations &lt;abbr&gt;.",
        syntax: "&lt;q&gt;Quote&lt;/q&gt; by &lt;cite&gt;Author&lt;/cite&gt;. &lt;abbr title='HyperText Markup Language'&gt;HTML&lt;/abbr&gt;",
        preview: "<q>To be or not to be</q> by <cite>Shakespeare</cite>.<br>I love <abbr title='HyperText Markup Language' style='border-bottom:1px dotted black;'>HTML</abbr>.",
        explanation: "Semantic tags for quotes and references."
    },
    {
        name: "audio",
        category: "Media",
        desc: "The &lt;audio&gt; element is used to embed sound content.",
        syntax: "&lt;audio src='sound.mp3' controls&gt;&lt;/audio&gt;",
        preview: "<div style='background:#f4f4f4; padding:10px; border-radius:20px; text-align:center;'>[ Audio Player Controls ]</div>",
        explanation: "Like video, but for sound only."
    },
    {
        name: "tt",
        category: "Formatting",
        desc: "The &lt;tt&gt; element creates teletype (monospaced) text. (Obsolete, use &lt;code&gt; instead).",
        syntax: "&lt;tt&gt;Teletype Text&lt;/tt&gt;",
        preview: "This is normal. <tt>This is Teletype text.</tt>",
        explanation: "Old way to make text look like a typewriter. Modern websites use CSS or the &lt;code&gt; tag."
    },
    {
        name: "link",
        category: "Structure",
        desc: "The &lt;link&gt; element defines a link between a document and an external resource (like a CSS file).",
        syntax: "&lt;link rel='stylesheet' href='style.css'&gt;",
        preview: "<div style='background:#ddd; padding:10px; text-align:center; color:#555;'>[Invisible Tag] <br> Loads style.css or icons in the background.</div>",
        explanation: "You don't see this on the page. It goes in the &lt;head&gt; to tell the browser to load things like your style sheet."
    },

    // --- Forms & Inputs ---
    {
        name: "form",
        category: "Forms",
        desc: "The &lt;form&gt; element represents a document section containing interactive controls for submitting information.",
        syntax: "&lt;form action='/submit'&gt;\n  &lt;!-- inputs go here --&gt;\n&lt;/form&gt;",
        preview: "<form style='border:1px dashed #333; padding:10px;'>Form Container</form>",
        explanation: "The wrapper for all your input fields. It handles sending the data to the server."
    },
    {
        name: "button",
        category: "Forms",
        desc: "The &lt;button&gt; element is a clickable button.",
        syntax: "&lt;button&gt;Click Me&lt;/button&gt;",
        preview: "<button style='padding:5px 10px;'>I am a Button</button>",
        explanation: "A standard clickable button. Can submit forms or trigger JavaScript."
    },
    {
        name: "select / option",
        category: "Forms",
        desc: "New dropdown menu. &lt;select&gt; creates the list, &lt;option&gt; items.",
        syntax: "&lt;select&gt;\n  &lt;option&gt;A&lt;/option&gt;\n  &lt;option&gt;B&lt;/option&gt;\n&lt;/select&gt;",
        preview: "<select><option>Option 1</option><option>Option 2</option></select>",
        explanation: "Creates a dropdown list for users to choose from."
    },
    {
        name: "input type='text'",
        category: "Forms",
        desc: "Standard single-line text input.",
        syntax: "&lt;input type='text' placeholder='Name'&gt;",
        preview: "<input type='text' placeholder='Type name here'>",
        explanation: "The most basic input field for text."
    },
    {
        name: "input type='password'",
        category: "Forms",
        desc: "Text input that hides characters.",
        syntax: "&lt;input type='password'&gt;",
        preview: "<input type='password' placeholder='Password'>",
        explanation: "Hides what you type with dots or asterisks."
    },
    {
        name: "input type='email'",
        category: "Forms",
        desc: "Input for email addresses. Validates format.",
        syntax: "&lt;input type='email'&gt;",
        preview: "<input type='email' placeholder='user@example.com'>",
        explanation: "Looks like text, but on mobile it shows the '@' key."
    },
    {
        name: "input type='number'",
        category: "Forms",
        desc: "Input for numeric values.",
        syntax: "&lt;input type='number' min='1' max='10'&gt;",
        preview: "<input type='number' placeholder='123'>",
        explanation: "Only accepts numbers. Often has up/down spinner arrows."
    },
    {
        name: "input type='date'",
        category: "Forms",
        desc: "Date picker widget.",
        syntax: "&lt;input type='date'&gt;",
        preview: "<input type='date'>",
        explanation: "Pops up a calendar to pick a date."
    },
    {
        name: "input type='checkbox'",
        category: "Forms",
        desc: "A tick box for binary choices.",
        syntax: "&lt;input type='checkbox' id='c'&gt; &lt;label for='c'&gt;Check me&lt;/label&gt;",
        preview: "<input type='checkbox'> Check me",
        explanation: "For 'yes/no' options. You can select multiple checkboxes."
    },
    {
        name: "input type='radio'",
        category: "Forms",
        desc: "Radio button for selecting one option from a set.",
        syntax: "&lt;input type='radio' name='g'&gt; A &lt;input type='radio' name='g'&gt; B",
        preview: "<input type='radio' name='grp'> Option A <input type='radio' name='grp'> Option B",
        explanation: "Like checkboxes, but you can only pick ONE from the group."
    },
    {
        name: "input type='color'",
        category: "Forms",
        desc: "A color picker.",
        syntax: "&lt;input type='color'&gt;",
        preview: "<input type='color'>",
        explanation: "Opens the system color palette."
    },
    {
        name: "input type='range'",
        category: "Forms",
        desc: "A slider control.",
        syntax: "&lt;input type='range' min='0' max='100'&gt;",
        preview: "<input type='range'>",
        explanation: "A slider to dragging select a value within a range."
    },
    {
        name: "input type='file'",
        category: "Forms",
        desc: "File upload selector.",
        syntax: "&lt;input type='file'&gt;",
        preview: "<input type='file'>",
        explanation: "Lets the user choose a file from their computer."
    },
    {
        name: "input type='search'",
        category: "Forms",
        desc: "Text field optimized for search.",
        syntax: "&lt;input type='search'&gt;",
        preview: "<input type='search' placeholder='Search...'>",
        explanation: "Like text, but may have a clear (X) button."
    },
    {
        name: "input type='url'",
        category: "Forms",
        desc: "Input for web addresses.",
        syntax: "&lt;input type='url'&gt;",
        preview: "<input type='url' placeholder='https://...'>",
        explanation: "Validates that the text is a link."
    },
    {
        name: "input type='tel'",
        category: "Forms",
        desc: "Input for telephone numbers.",
        syntax: "&lt;input type='tel'&gt;",
        preview: "<input type='tel' placeholder='123-456-7890'>",
        explanation: "Brings up the number pad on mobile keyboards."
    },
    // Adding remaining types from request: submit, reset, month, week, fieldset/legend (implied by context usually but good to have)
    {
        name: "input type='submit'",
        category: "Forms",
        desc: "Submit button for forms.",
        syntax: "&lt;input type='submit' value='Send'&gt;",
        preview: "<input type='submit' value='Submit Form'>",
        explanation: "A button that submits the form data."
    },
    {
        name: "input type='reset'",
        category: "Forms",
        desc: "Reset button for forms.",
        syntax: "&lt;input type='reset' value='Clear'&gt;",
        preview: "<input type='reset' value='Reset Form'>",
        explanation: "A button that clears all form inputs."
    }
];

// Select DOM Elements
const tagListContainer = document.getElementById('tag-list');
const contentDisplay = document.getElementById('content-display');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

// Function: Initialize the App
function init() {
    renderSidebar();
    setupEventListeners();
}

// Function: Set up global event listeners
function setupEventListeners() {
    // Mobile Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            // Change button text based on state
            if (sidebar.classList.contains('active')) {
                menuToggle.textContent = '✕ Close';
            } else {
                menuToggle.textContent = '☰ Menu';
            }
        });
    }

    // Close sidebar when clicking outside on mobile (optional UX improvement)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                menuToggle.textContent = '☰ Menu';
            }
        }
    });
}

// Function: Build Sidebar from Data
function renderSidebar() {
    tagListContainer.innerHTML = ""; // Clear existing

    tagsData.forEach(tag => {
        const li = document.createElement('li');
        li.className = "tag-item";
        li.textContent = "<" + tag.name + ">"; // Display as <tag>

        // Add click event
        li.addEventListener('click', () => {
            // Remove 'active' class from all
            document.querySelectorAll('.tag-item').forEach(el => el.classList.remove('active'));
            // Add 'active' to clicked
            li.classList.add('active');

            // Generate content
            loadTagContent(tag);

            // On mobile, close sidebar after selection
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                if (menuToggle) menuToggle.textContent = '☰ Menu';
            }
        });

        tagListContainer.appendChild(li);
    });
}

// Function: Display Tag Content
function loadTagContent(tag) {
    const htmlContent = `
        <div class="card">
            <h1 class="tag-title">&lt;${tag.name}&gt;</h1>
            <p class="tag-desc">${tag.desc}</p>
            
            <h3 class="section-title">Beginner Explanation</h3>
            <p>${tag.explanation}</p>
            
            <h3 class="section-title">Syntax Example</h3>
            <div class="code-block">
                <pre>${tag.syntax}</pre>
            </div>
            
            <h3 class="section-title">Live Preview</h3>
            <div class="preview-box">
                ${tag.preview}
            </div>
        </div>
    `;

    contentDisplay.innerHTML = htmlContent;

    // Smooth scroll content area to top
    contentDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Start the App
init();
