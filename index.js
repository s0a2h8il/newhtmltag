// Data Source for all HTML Tags
// This object acts as our "database" for the tutorial content.
// UPDATED: Syntax blocks now closely match the Live Preview content for clarity.

const tagsData = [
    // --- Layout Tags ---
    {
        name: "header",
        category: "Structure",
        desc: "The &lt;header&gt; element represents introductory content, typically a group of introductory or navigational aids.",
        syntax: "&lt;header style='background:#f0f0f0; padding:10px;'&gt;\n  &lt;h1&gt;My Website Header&lt;/h1&gt;\n&lt;/header&gt;",
        preview: "<header style='background:#f0f0f0; padding:10px;'><h1>My Website Header</h1></header>",
        explanation: "Think of this as the top banner of your webpage. It usually contains the logo and main navigation."
    },
    {
        name: "main",
        category: "Structure",
        desc: "The &lt;main&gt; element represents the dominant content of the &lt;body&gt; of a document.",
        syntax: "&lt;main style='border:1px dashed #333; padding:10px;'&gt;\n  &lt;p&gt;Main content area...&lt;/p&gt;\n&lt;/main&gt;",
        preview: "<main style='border:1px dashed #333; padding:10px;'><p>Main content area...</p></main>",
        explanation: "This is where the 'meat' of your page goes. It holds the core information unique to that specific page."
    },
    {
        name: "footer",
        category: "Structure",
        desc: "The &lt;footer&gt; element represents a footer for its nearest sectioning content or sectioning root element.",
        syntax: "&lt;footer style='background:#333; color:white; padding:10px; text-align:center;'&gt;\n  &lt;p&gt;© 2025 HTML Tutorial&lt;/p&gt;\n&lt;/footer&gt;",
        preview: "<footer style='background:#333; color:white; padding:10px; text-align:center;'>© 2025 HTML Tutorial</footer>",
        explanation: "The bottom section of your site. Great for copyright notices, contact info, and related links."
    },
    {
        name: "aside",
        category: "Structure",
        desc: "The &lt;aside&gt; element represents a portion of a document whose content is only indirectly related to the document's main content.",
        syntax: "&lt;div style='display:flex;'&gt;\n  &lt;article&gt;Main Article&lt;/article&gt;\n  &lt;aside style='background:#eee; padding:5px;'&gt;Sidebar/Aside&lt;/aside&gt;\n&lt;/div&gt;",
        preview: "<div style='display:flex; gap:10px;'><article style='flex:1;'>Main Article</article><aside style='background:#eee; padding:5px;'>Sidebar/Aside</aside></div>",
        explanation: "Often used for sidebars, call-out boxes, or advertising. It's 'aside' from the main content."
    },
    {
        name: "article",
        category: "Structure",
        desc: "The &lt;article&gt; element represents a self-contained composition in a document.",
        syntax: "&lt;article style='border:1px solid #ccc; padding:10px;'&gt;\n  &lt;h2&gt;News Headline&lt;/h2&gt;\n  &lt;p&gt;This is a self-contained news story.&lt;/p&gt;\n&lt;/article&gt;",
        preview: "<article style='border:1px solid #ccc; padding:10px;'><h2>News Headline</h2><p>This is a self-contained news story.</p></article>",
        explanation: "Use this for blog posts, news stories, or forum comments—anything that makes sense on its own."
    },
    {
        name: "section",
        category: "Structure",
        desc: "The &lt;section&gt; element represents a generic standalone section of document.",
        syntax: "&lt;section style='border:1px solid blue; padding:10px;'&gt;\n  &lt;h2&gt;Section Heading&lt;/h2&gt;\n  &lt;p&gt;Content for this specific section.&lt;/p&gt;\n&lt;/section&gt;",
        preview: "<section style='border:1px solid blue; padding:10px;'><h2>Section Heading</h2><p>Content for this specific section.</p></section>",
        explanation: "A way to group related content together, like chapters in a book."
    },
    {
        name: "div",
        category: "Structure",
        desc: "The &lt;div&gt; (division) element is the generic container for flow content.",
        syntax: "&lt;div style='background:lightblue; padding:20px; text-align:center;'&gt;\n  I am a generic DIV container\n&lt;/div&gt;",
        preview: "<div style='background:lightblue; padding:20px; text-align:center;'>I am a generic DIV container</div>",
        explanation: "The ultimate 'box'. It has no meaning on its own but is used everywhere to group elements for styling."
    },

    // --- Text Tags ---
    {
        name: "p",
        category: "Text",
        desc: "The &lt;p&gt; element represents a paragraph.",
        syntax: "&lt;p&gt;This is a paragraph. Browsers automatically add some space.&lt;/p&gt;",
        preview: "<p>This is a paragraph. Browsers automatically add some space.</p>",
        explanation: "The most common tag for regular text blocks."
    },
    {
        name: "span",
        category: "Text",
        desc: "The &lt;span&gt; element is a generic inline container for phrasing content.",
        syntax: "&lt;p&gt;Normal text, &lt;span style='color:red; font-weight:bold;'&gt;span text&lt;/span&gt;.&lt;/p&gt;",
        preview: "<p>Normal text, <span style='color:red; font-weight:bold;'>span text</span>.</p>",
        explanation: "Like <div> but for small optimizations inside a line of text. Good for coloring specific words."
    },
    {
        name: "br",
        category: "Text",
        desc: "The &lt;br&gt; element produces a line break in text (carriage-return).",
        syntax: "First line.&lt;br&gt;\nSecond line (forced by br).",
        preview: "First line.<br>Second line (forced by br).",
        explanation: "Forces text to drop to the next line without starting a new paragraph."
    },
    {
        name: "hr",
        category: "Text",
        desc: "The &lt;hr&gt; element represents a thematic break between paragraph-level elements.",
        syntax: "&lt;p&gt;Section 1&lt;/p&gt;\n&lt;hr&gt;\n&lt;p&gt;Section 2&lt;/p&gt;",
        preview: "<p>Section 1</p><hr><p>Section 2</p>",
        explanation: "Draws a horizontal line. Good for separating chapters or topics."
    },
    {
        name: "b / strong",
        category: "Text",
        desc: "&lt;b&gt; is for bold text stylistically. &lt;strong&gt; is for important text (bold).",
        syntax: "This is &lt;b&gt;bold text&lt;/b&gt;. This is &lt;strong&gt;strong text&lt;/strong&gt;.",
        preview: "This is <b>bold text</b>. This is <strong>strong text</strong>.",
        explanation: "Both make text fat. Use <strong> when the word is actually important."
    },
    {
        name: "i / em",
        category: "Text",
        desc: "&lt;i&gt; is for italic text. &lt;em&gt; is for emphasized text.",
        syntax: "This is &lt;i&gt;italic&lt;/i&gt;. This is &lt;em&gt;emphasized&lt;/em&gt;.",
        preview: "This is <i>italic</i>. This is <em>emphasized</em>.",
        explanation: "Both slant the text. Use <em> for things you'd stress in speech."
    },

    // --- Formatting ---
    {
        name: "sub / sup",
        category: "Formatting",
        desc: "Subscript (&lt;sub&gt;) and Superscript (&lt;sup&gt;).",
        syntax: "H&lt;sub&gt;2&lt;/sub&gt;O and E=mc&lt;sup&gt;2&lt;/sup&gt;",
        preview: "H<sub>2</sub>O and E=mc<sup>2</sup>",
        explanation: "Small letters below or above the line. Used for math and chemicals."
    },
    {
        name: "code",
        category: "Formatting",
        desc: "The &lt;code&gt; element displays a short fragment of computer code.",
        syntax: "&lt;p&gt;Please run &lt;code&gt;console.log('Hello')&lt;/code&gt;&lt;/p&gt;",
        preview: "<p>Please run <code>console.log('Hello')</code></p>",
        explanation: "Shows text in a 'robot' font (monospace) to look like computer code."
    },
    {
        name: "u / s / del",
        category: "Formatting",
        desc: "&lt;u&gt; is underline, &lt;s&gt; is strikethrough, &lt;del&gt; is deleted text.",
        syntax: "&lt;u&gt;Underline&lt;/u&gt; &lt;s&gt;Strikethrough&lt;/s&gt; &lt;del&gt;Deleted&lt;/del&gt;",
        preview: "<u>Underline</u> <s>Strikethrough</s> <del>Deleted</del>",
        explanation: "Different ways to mark text as removed or highlighted directly."
    },
    {
        name: "pre",
        category: "Formatting",
        desc: "The &lt;pre&gt; element defines preformatted text.",
        syntax: "&lt;pre style='background:#eee; border:1px solid #999;'&gt;\n  This text    keeps\n  all its    spacing.\n&lt;/pre&gt;",
        preview: "<pre style='background:#eee; border:1px solid #999;'>  This text    keeps\n  all its    spacing.</pre>",
        explanation: "Preserves your spaces and line breaks exactly as you type them."
    },
    {
        name: "q / cite / abbr",
        category: "Formatting",
        desc: "Quotes &lt;q&gt;, Citations &lt;cite&gt;, Abbreviations &lt;abbr&gt;.",
        syntax: "&lt;q&gt;To be&lt;/q&gt; by &lt;cite&gt;Shakespeare&lt;/cite&gt;.<br>I love &lt;abbr title='HyperText Markup Language'&gt;HTML&lt;/abbr&gt;.",
        preview: "<q>To be</q> by <cite>Shakespeare</cite>.<br>I love <abbr title='HyperText Markup Language' style='border-bottom:1px dotted black; cursor:help;'>HTML</abbr>.",
        explanation: "Semantic tags for quotes and references."
    },
    {
        name: "tt",
        category: "Formatting",
        desc: "The &lt;tt&gt; element creates teletype (monospaced) text. (Obsolete).",
        syntax: "This is normal. &lt;tt&gt;This is Teletype text.&lt;/tt&gt;",
        preview: "This is normal. <tt>This is Teletype text.</tt>",
        explanation: "Old way to make text look like a typewriter. Modern websites use CSS or the &lt;code&gt; tag."
    },

    // --- Media & Links ---
    {
        name: "a",
        category: "Media",
        desc: "The &lt;a&gt; (anchor) element defines a hyperlink.",
        syntax: "&lt;a href='#' onclick='alert(\"Clicked!\")'&gt;Click Me!&lt;/a&gt;",
        preview: "<a href='#' onclick='alert(\"You clicked a link!\"); return false;'>Click Me!</a>",
        explanation: "The magic tag that connects the web. Wraps text to make it clickable."
    },
    {
        name: "img",
        category: "Media",
        desc: "The &lt;img&gt; element embeds an image into the document.",
        syntax: "&lt;img src='https://via.placeholder.com/100x50' alt='Placeholder'&gt;",
        preview: "<div style='display:flex; align-items:center; gap:10px;'><img src='https://via.placeholder.com/100x50' alt='Placeholder'> <span>(Image loaded from URL)</span></div>",
        explanation: "Puts a picture on the page. Needs a 'src' (source) link to work."
    },
    {
        name: "video",
        category: "Media",
        desc: "The &lt;video&gt; element embeds a media player.",
        syntax: "&lt;video src='movie.mp4' controls width='200'&gt;&lt;/video&gt;",
        preview: "<div style='background:black; color:white; width:200px; height:120px; display:flex; align-items:center; justify-content:center; border:2px solid #555;'>[Video Player]</div>",
        explanation: "A built-in video player. Added a placeholder here since we don't have a real video file."
    },
    {
        name: "audio",
        category: "Media",
        desc: "The &lt;audio&gt; element is used to embed sound content.",
        syntax: "&lt;audio src='sound.mp3' controls&gt;&lt;/audio&gt;",
        preview: "<div style='background:#f4f4f4; padding:10px; border-radius:20px; width:250px; text-align:center; border:1px solid #ccc;'>▶ 🔊 [Audio Controls]</div>",
        explanation: "Like video, but for sound only."
    },
    {
        name: "marquee",
        category: "Media",
        desc: "The &lt;marquee&gt; element creates a scrolling text effect.",
        syntax: "&lt;marquee direction='left' style='background:#eee; padding:5px;'&gt;\n  I am scrolling text!\n&lt;/marquee&gt;",
        preview: "<marquee direction='left' style='background:#eee; padding:5px;'>I am scrolling text!</marquee>",
        explanation: "Makes text move across the screen. Don't use this on serious websites anymore!"
    },
    {
        name: "link",
        category: "Media",
        desc: "The &lt;link&gt; element defines a link between a document and an external resource.",
        syntax: "&lt;link rel='stylesheet' href='style.css'&gt;",
        preview: "<div style='background:#f9f9f9; border:1px solid #ccc; padding:10px; text-align:center; color:#555;'>[Invisible Tag]<br>Functions in the &lt;head&gt;</div>",
        explanation: "You don't see this on the page body. It loads valid resources like CSS styles."
    },

    // --- Forms & Inputs ---
    {
        name: "form",
        category: "Forms",
        desc: "The &lt;form&gt; element represents a document section for interactive controls.",
        syntax: "&lt;form style='border:1px dashed #333; padding:10px;'&gt;\n  &lt;!-- inputs go here --&gt;\n  Form Container\n&lt;/form&gt;",
        preview: "<form style='border:1px dashed #333; padding:10px;'>Form Container</form>",
        explanation: "The wrapper for all your input fields. It handles sending the data to the server."
    },
    {
        name: "button",
        category: "Forms",
        desc: "The &lt;button&gt; element is a clickable button.",
        syntax: "&lt;button style='padding:5px 10px;'&gt;I am a Button&lt;/button&gt;",
        preview: "<button style='padding:5px 10px;'>I am a Button</button>",
        explanation: "A standard clickable button. Can submit forms or trigger JavaScript."
    },
    {
        name: "select / option",
        category: "Forms",
        desc: "Dropdown menu.",
        syntax: "&lt;select&gt;\n  &lt;option&gt;Option 1&lt;/option&gt;\n  &lt;option&gt;Option 2&lt;/option&gt;\n&lt;/select&gt;",
        preview: "<select><option>Option 1</option><option>Option 2</option></select>",
        explanation: "Creates a dropdown list for users to choose from."
    },
    {
        name: "input type='text'",
        category: "Forms",
        desc: "Standard single-line text input.",
        syntax: "&lt;input type='text' placeholder='Type name here'&gt;",
        preview: "<input type='text' placeholder='Type name here'>",
        explanation: "The most basic input field for text."
    },
    {
        name: "input type='password'",
        category: "Forms",
        desc: "Text input that hides characters.",
        syntax: "&lt;input type='password' placeholder='Password'&gt;",
        preview: "<input type='password' placeholder='Password'>",
        explanation: "Hides what you type with dots or asterisks."
    },
    {
        name: "input type='email'",
        category: "Forms",
        desc: "Input for email addresses.",
        syntax: "&lt;input type='email' placeholder='user@example.com'&gt;",
        preview: "<input type='email' placeholder='user@example.com'>",
        explanation: "Looks like text, but on mobile it shows the '@' key."
    },
    {
        name: "input type='number'",
        category: "Forms",
        desc: "Input for numeric values.",
        syntax: "&lt;input type='number' placeholder='123'&gt;",
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
        syntax: "&lt;label&gt;&lt;input type='checkbox'&gt; Check me&lt;/label&gt;",
        preview: "<label><input type='checkbox'> Check me</label>",
        explanation: "For 'yes/no' options. You can select multiple checkboxes."
    },
    {
        name: "input type='radio'",
        category: "Forms",
        desc: "Radio button for selecting one option from a set.",
        syntax: "&lt;input type='radio' name='grp'&gt; A &lt;input type='radio' name='grp'&gt; B",
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
        syntax: "&lt;input type='range'&gt;",
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
        syntax: "&lt;input type='search' placeholder='Search...'&gt;",
        preview: "<input type='search' placeholder='Search...'>",
        explanation: "Like text, but may have a clear (X) button."
    },
    {
        name: "input type='url'",
        category: "Forms",
        desc: "Input for web addresses.",
        syntax: "&lt;input type='url' placeholder='https://...'&gt;",
        preview: "<input type='url' placeholder='https://...'>",
        explanation: "Validates that the text is a link."
    },
    {
        name: "input type='tel'",
        category: "Forms",
        desc: "Input for telephone numbers.",
        syntax: "&lt;input type='tel' placeholder='123-456-7890'&gt;",
        preview: "<input type='tel' placeholder='123-456-7890'>",
        explanation: "Brings up the number pad on mobile keyboards."
    },
    {
        name: "input type='submit'",
        category: "Forms",
        desc: "Submit button for forms.",
        syntax: "&lt;input type='submit' value='Submit Form'&gt;",
        preview: "<input type='submit' value='Submit Form'>",
        explanation: "A button that submits the form data."
    },
    {
        name: "input type='reset'",
        category: "Forms",
        desc: "Reset button for forms.",
        syntax: "&lt;input type='reset' value='Reset Form'&gt;",
        preview: "<input type='reset' value='Reset Form'>",
        explanation: "A button that clears all form inputs."
    },

    // --- Tables ---
    {
        name: "table",
        category: "Tables",
        desc: "The &lt;table&gt; element creates a table to display data.",
        syntax: "&lt;table border='1' cellpadding='5'&gt;\n  &lt;tr&gt;\n    &lt;td&gt;Row 1&lt;/td&gt;\n    &lt;td&gt;Data&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;",
        preview: "<table border='1' cellpadding='5'><tr><td>Row 1</td><td>Data</td></tr></table>",
        explanation: "The main container for your table. Use other tags inside it to make rows and columns."
    },
    {
        name: "tr (Table Row)",
        category: "Tables",
        desc: "The &lt;tr&gt; element defines a row of cells in a table.",
        syntax: "&lt;table border='1'&gt;\n  &lt;tr&gt;\n    &lt;td&gt;I am in a Row&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;",
        preview: "<table border='1'><tr><td>I am in a Row</td></tr></table>",
        explanation: "Every new horizontal line in your table starts with this tag."
    },
    {
        name: "td (Table Data)",
        category: "Tables",
        desc: "The &lt;td&gt; element defines a standard data cell.",
        syntax: "&lt;table border='1'&gt;\n  &lt;tr&gt;\n    &lt;td&gt;Cell 1&lt;/td&gt;\n    &lt;td&gt;Cell 2&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;",
        preview: "<table border='1'><tr><td>Cell 1</td><td>Cell 2</td></tr></table>",
        explanation: "The actual box where you put your text or images inside a row."
    },
    {
        name: "th (Table Header)",
        category: "Tables",
        desc: "The &lt;th&gt; element defines a header cell.",
        syntax: "&lt;table border='1'&gt;\n  &lt;tr&gt;\n    &lt;th&gt;Bold Title&lt;/th&gt;\n  &lt;/tr&gt;\n  &lt;tr&gt;\n    &lt;td&gt;Normal Data&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;",
        preview: "<table border='1'><tr><th>Bold Title</th></tr><tr><td>Normal Data</td></tr></table>",
        explanation: "Like a 'td' but bold and centered. Use it for column titles."
    },
    {
        name: "caption",
        category: "Tables",
        desc: "The &lt;caption&gt; element adds a title to the table.",
        syntax: "&lt;table border='1'&gt;\n  &lt;caption&gt;Monthly Savings&lt;/caption&gt;\n  &lt;tr&gt;\n    &lt;td&gt;$100&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;",
        preview: "<table border='1'><caption>Monthly Savings</caption><tr><td>$100</td></tr></table>",
        explanation: "A label that sits right above the table."
    },
    {
        name: "thead / tbody / tfoot",
        category: "Tables",
        desc: "Groups for Header, Body, and Footer content.",
        syntax: "&lt;table border='1'&gt;\n  &lt;thead&gt;\n    &lt;tr&gt;&lt;th&gt;Head&lt;/th&gt;&lt;/tr&gt;\n  &lt;/thead&gt;\n  &lt;tbody&gt;\n    &lt;tr&gt;&lt;td&gt;Body&lt;/td&gt;&lt;/tr&gt;\n  &lt;/tbody&gt;\n  &lt;tfoot&gt;\n    &lt;tr&gt;&lt;td&gt;Foot&lt;/td&gt;&lt;/tr&gt;\n  &lt;/tfoot&gt;\n&lt;/table&gt;",
        preview: "<table border='1'><thead><tr><th>Head</th></tr></thead><tbody><tr><td>Body</td></tr></tbody><tfoot><tr><td>Foot</td></tr></tfoot></table>",
        explanation: "Helps organize big tables. Browsers can scroll the body while keeping the head fixed (with CSS)."
    },
    {
        name: "colspan / rowspan",
        category: "Tables",
        desc: "Attributes to merge cells across columns or rows.",
        syntax: "&lt;table border='1'&gt;\n  &lt;tr&gt;\n    &lt;td colspan='2' style='background:#ccc'&gt;Spans 2 Cols&lt;/td&gt;\n  &lt;/tr&gt;\n  &lt;tr&gt;\n    &lt;td&gt;A&lt;/td&gt;&lt;td&gt;B&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;",
        preview: "<table border='1'><tr><td colspan='2' style='background:#ccc'>Spans 2 Cols</td></tr><tr><td>A</td><td>B</td></tr></table>",
        explanation: "Use 'colspan' to stretch a cell wide, and 'rowspan' to stretch it tall."
    },

    // --- Concepts ---
    {
        name: "HTML 4.1 vs 5.0",
        category: "Concepts",
        desc: "The evolution of the standard.",
        syntax: "&lt;!-- HTML 4 --&gt;\n&lt;div id='header'&gt;...&lt;/div&gt;\n\n&lt;!-- HTML 5 (Modern) --&gt;\n&lt;header&gt;...&lt;/header&gt;\n&lt;nav&gt;...&lt;/nav&gt;",
        preview: "<div style='font-family:sans-serif;'><strong>HTML 5</strong> introduced semantic tags like <code>&lt;article&gt;</code> and <code>&lt;nav&gt;</code> to replace generic <code>&lt;div&gt;</code> soup.</div>",
        explanation: "HTML5 is the modern version. It added support for video, audio, and cleaner code structures compared to the older 4.01."
    },
    {
        name: "Block vs Inline",
        category: "Concepts",
        desc: "How elements occupy space on the page.",
        syntax: "&lt;div style='background:salmon; padding:5px; margin-bottom:5px; color:white;'&gt;\n  I am Block (starts new line)\n&lt;/div&gt;\n&lt;span style='background:lightblue; padding:2px; color:black;'&gt;\n  I am Inline\n&lt;/span&gt;\n&lt;span style='background:lightgreen; padding:2px; color:black;'&gt;\n  Me too\n&lt;/span&gt;",
        explanation: "<b>Block</b> elements (like &lt;div&gt;) take up the full width and start a new line. <b>Inline</b> elements (like &lt;span&gt;) only take as much width as they need and stay on the same line."
    }
];

// --- CSS Data ---
const cssData = [
    {
        name: "color",
        category: "Text Styling",
        desc: "Sets the color of the text.",
        syntax: "p { color: red; }",
        preview: "<p style='color: red;'>This text is red.</p>",
        explanation: "Changes the text color. You can use names (red), hex codes (#ff0000), or rgb values."
    },
    {
        name: "background-color",
        category: "Backgrounds",
        desc: "Sets the background color of an element.",
        syntax: "div { background-color: yellow; }",
        preview: "<div style='background-color: yellow; padding: 10px;'>Yellow Background</div>",
        explanation: "Paints the background of the box."
    },
    {
        name: "background",
        category: "Backgrounds",
        desc: "Shorthand property for setting all background style properties.",
        syntax: "div { background: lightblue url('img.png') no-repeat fixed center; }",
        preview: "<div style='background: lightblue; padding: 10px;'>Shorthand Background</div>",
        explanation: "A quick way to set color, image, repeat, etc. all at once."
    },
    {
        name: "font-size",
        category: "Typography",
        desc: "Sets the size of the font.",
        syntax: "p { font-size: 20px; }",
        preview: "<p style='font-size: 20px;'>Big Text (20px)</p>",
        explanation: "Controls how big the text is. Pixels (px) are common, but 'rem' is better for accessibility."
    },
    {
        name: "font-family",
        category: "Typography",
        desc: "Specifies the font for an element.",
        syntax: "p { font-family: 'Courier New', monospace; }",
        preview: "<p style='font-family: \"Courier New\", monospace;'>Typewriter Font</p>",
        explanation: "The typeface used. Always provides a fallback list."
    },
    {
        name: "font-weight",
        category: "Typography",
        desc: "Sets how thick or thin characters in text should be displayed.",
        syntax: "p { font-weight: bold; }",
        preview: "<p style='font-weight: bold;'>Bold Text</p>",
        explanation: "Use 'bold' or numbers like 400 (normal) and 700 (bold)."
    },
    {
        name: "font-style",
        category: "Typography",
        desc: "Specifies the font style for a text (e.g. italic).",
        syntax: "p { font-style: italic; }",
        preview: "<p style='font-style: italic;'>Italic Text</p>",
        explanation: "Mostly used to make text italic."
    },
    {
        name: "text-align",
        category: "Typography",
        desc: "Specifies the horizontal alignment of text in an element.",
        syntax: "div { text-align: center; }",
        preview: "<div style='text-align: center; border: 1px solid #ccc;'>Centered Text</div>",
        explanation: "Aligns text to left, right, center, or justify."
    },
    {
        name: "padding",
        category: "Box Model",
        desc: "Sets the padding area of an element (space inside).",
        syntax: "div { padding: 20px; }",
        preview: "<div style='background: #a3b18a; padding: 20px; color:white;'>I have padding</div>",
        explanation: "Space INSIDE the border, between the content and the edge."
    },
    {
        name: "margin",
        category: "Box Model",
        desc: "Sets the margin area of an element (space outside).",
        syntax: "div { margin: 20px; }",
        preview: "<div style='background: #ccc; display:inline-block;'>Box</div><div style='background: salmon; margin-left: 20px; display:inline-block;'>Box with Margin</div>",
        explanation: "Space OUTSIDE the border, pushing other elements away."
    },
    {
        name: "border",
        category: "Box Model",
        desc: "Sets the border around an element.",
        syntax: "div { border: 2px solid black; }",
        preview: "<div style='border: 2px solid black; padding: 5px;'>I have a border</div>",
        explanation: "The line around the box. Needs width, style, and color."
    },
    {
        name: "border-radius",
        category: "Box Model",
        desc: "Defines the radius of the element's corners.",
        syntax: "div { border-radius: 10px; }",
        preview: "<div style='background: #588157; color:white; padding:10px; border-radius: 10px;'>Rounded Corners</div>",
        explanation: "Rounds the sharp corners of a box."
    },
    {
        name: "width / height",
        category: "Box Model",
        desc: "Sets the width and height of an element.",
        syntax: "div { width: 100px; height: 50px; }",
        preview: "<div style='width: 100px; height: 50px; background: blue; color: white;'>100x50</div>",
        explanation: "Controls the size of the element."
    },
    {
        name: "display",
        category: "Layout",
        desc: "Specifies the display behavior (the type of rendering box) of an element.",
        syntax: "div { display: inline-block; }",
        preview: "<span>Start</span> <div style='display: inline-block; background: orange; padding: 5px;'>Inline Block</div> <span>End</span>",
        explanation: "Key layout property. Common values: block, inline, inline-block, flex, grid, none."
    },
    {
        name: "position",
        category: "Layout",
        desc: "Specifies the type of positioning method used for an element.",
        syntax: "div { position: relative; top: 10px; }",
        preview: "<div style='background:#eee; height:40px;'><div style='background:red; width:20px; height:20px; position:relative; top:10px; left:10px;'></div></div>",
        explanation: "static (default), relative, absolute, fixed, or sticky."
    },
    {
        name: "background-size",
        category: "Backgrounds",
        desc: "Specifies the size of the background images.",
        syntax: "div { background-size: cover; }",
        preview: "<div style='width:100px; height:60px; border:1px solid #333; background: url(https://via.placeholder.com/20) no-repeat; background-size: cover;'></div>",
        explanation: "cover, contain, or specific pixel values."
    },
    {
        name: "background-position",
        category: "Backgrounds",
        desc: "Sets the starting position of a background image.",
        syntax: "div { background-position: center; }",
        preview: "<div style='width:100px; height:60px; border:1px solid #333; background: url(https://via.placeholder.com/20) no-repeat; background-position: center;'></div>",
        explanation: "center, top, bottom, left, right."
    },
    {
        name: "background-repeat",
        category: "Backgrounds",
        desc: "Sets if/how a background image will be repeated.",
        syntax: "div { background-repeat: no-repeat; }",
        preview: "<div style='width:100px; height:60px; border:1px solid #333; background: url(https://via.placeholder.com/20) repeat-x;'></div>",
        explanation: "repeat (default), repeat-x, repeat-y, no-repeat."
    }
];

// Select DOM Elements
const tagListContainer = document.getElementById('tag-list');
const contentDisplay = document.getElementById('content-display');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const navHtml = document.getElementById('nav-html');
const navCss = document.getElementById('nav-css');

let currentMode = 'html'; // 'html' or 'css'

// Function: Initialize the App
function init() {
    setupEventListeners();
    switchMode('html'); // Initialize with HTML mode
}

// Function: Set up global event listeners
function setupEventListeners() {
    // Mode Switching
    navHtml.addEventListener('click', (e) => {
        e.preventDefault();
        switchMode('html');
    });

    navCss.addEventListener('click', (e) => {
        e.preventDefault();
        switchMode('css');
    });

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

function switchMode(mode) {
    currentMode = mode;

    // Update Nav UI
    if (mode === 'html') {
        navHtml.classList.add('active');
        navCss.classList.remove('active');
    } else {
        navHtml.classList.remove('active');
        navCss.classList.add('active');
    }

    // Reset view
    renderSidebar();

    // Reset Content Area
    if (mode === 'html') {
        contentDisplay.innerHTML = `
            <h2>Welcome to HTML Basics!</h2>
            <p>Select a tag from the sidebar to learn more about it.</p>
            <div class="instruction-arrow">← Start here</div>`;
    } else {
        contentDisplay.innerHTML = `
            <h2>Welcome to CSS Basics!</h2>
            <p>Select a property from the sidebar to learn style.</p>
            <div class="instruction-arrow">← Start here</div>`;
    }
}

// Function: Build Sidebar from Data
function renderSidebar() {
    tagListContainer.innerHTML = ""; // Clear existing

    // Choose data source based on mode
    const data = currentMode === 'html' ? tagsData : cssData;

    data.forEach(item => {
        const li = document.createElement('li');
        li.className = "tag-item";
        li.textContent = item.name; // Display name
        if (currentMode === 'html') li.textContent = "<" + item.name + ">";

        // Add click event
        li.addEventListener('click', () => {
            // Remove 'active' class from all
            document.querySelectorAll('.tag-item').forEach(el => el.classList.remove('active'));
            // Add 'active' to clicked
            li.classList.add('active');

            // Generate content
            loadContent(item);

            // On mobile, close sidebar after selection
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                if (menuToggle) menuToggle.textContent = '☰ Menu';
            }
        });

        tagListContainer.appendChild(li);
    });
}

// Function: Display Content
function loadContent(item) {
    const htmlContent = `
        <div class="card">
            <h1 class="tag-title">${currentMode === 'html' ? '&lt;' + item.name + '&gt;' : item.name}</h1>
            <p class="tag-desc">${item.desc}</p>
            
            <h3 class="section-title">Beginner Explanation</h3>
            <p>${item.explanation}</p>
            
            <h3 class="section-title">Syntax Example</h3>
            <div class="code-block">
                <pre>${item.syntax}</pre>
            </div>
            
            <h3 class="section-title">Live Preview</h3>
            <div class="preview-box">
                ${item.preview}
            </div>
        </div>
    `;

    contentDisplay.innerHTML = htmlContent;

    // Smooth scroll content area to top
    contentDisplay.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Start the App
init();
