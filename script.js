/*SIFAN FIBROTECH */


/* COMPANY INFORMATION */

const COMPANY = {

    name: "Sifan Fibrotech",

    website:
        "https://sifanfibrotech.in/",

    location:
        "Babaleshwar, Vijayapura, Karnataka, 586113",

    whatsapp:
        "919623833304"

};


/* KNOWLEDGE */

const answers = {

    enclosure: `
Our FRP Electrical Enclosures are designed to protect electrical components in demanding environments.

FRP is a non-conductive/insulating material.

For the correct product, please share:

• Required size
• Quantity
• Application
• Location

Our team can then help with the quotation.
`,



    tank: `
FRP Tanks are used for various water, chemical and industrial applications.

The correct FRP tank design depends on:

• Capacity
• Stored material
• Chemical concentration
• Temperature
• Application

Tell me the required tank capacity and application and we can guide you further.
`,



    motorBox: `
FRP Motor Boxes are useful where corrosion resistance, weather resistance and lightweight construction are required.

For a quotation, please share:

• Motor/application details
• Required size
• Quantity
• Location
`,



    lining: `
FRP Tank and Factory Lining can be used to provide a corrosion-resistant lining system.

The correct lining system depends on:

• Chemical/material
• Concentration
• Temperature
• Existing surface
• Service conditions

Share your tank or factory details for a better recommendation.
`,



    automotive: `
Sifan Fibrotech can manufacture custom FRP automotive components.

For a quotation, please provide:

• Part name
• Dimensions
• Quantity
• Drawing or reference photo
`,



    marine: `
FRP is commonly used for lightweight and corrosion-resistant marine components.

For a custom requirement, please share:

• Component name
• Dimensions
• Quantity
• Reference drawing/photo
`,



    decorative: `
We can work on FRP decorative products and custom sculptural creations.

For a quotation, please share:

• Design/reference photo
• Dimensions
• Quantity
• Location
`,



    epoxyTable: `
We also work with decorative epoxy applications such as epoxy art and table tops.

For an epoxy table quotation, please share:

• Length
• Width
• Thickness
• Design
• Quantity
`,



    custom: `
Sifan Fibrotech can manufacture suitable custom FRP products according to customer requirements.

You can send:

• Drawing
• Product photo
• Dimensions
• Quantity
• Application
`,



    quotation: `
Sure 👍

I can help you with a quotation enquiry.

Please send:

• Name
• Phone/WhatsApp number
• Location
• Product/service required
• Quantity
• Size/capacity
• Drawing or photo if available

You can also use the WhatsApp Enquiry button below.
`,



    price: `
The price depends on the product, size, material/system, quantity and application.

I don't want to give you an incorrect price.

For an exact quotation, please provide:

• Product
• Size/capacity
• Quantity
• Location
• Application
`,



    waterproof: `
FRP products can be designed for water-resistant or waterproof applications depending on the product construction and intended use.

The exact performance depends on:

• Product design
• Laminate
• Joints
• Application

Tell me which FRP product you are asking about.
`,



    shockproof: `
FRP is generally an electrically non-conductive/insulating material.

However, a complete electrical product should not simply be described as universally "shockproof".

Electrical safety depends on:

• Product design
• Installation
• Electrical system
• Application

For an electrical enclosure requirement, tell me the required size and application.
`,



    products: `
We provide various FRP products, including:

• FRP Electrical Enclosures
• FRP Motor Boxes
• FRP Tanks
• FRP Automotive Components
• FRP Marine Components
• FRP Decorative Products
• Custom FRP Products

Which product are you interested in?
`,



    services: `
Our services include:

• FRP Tank Lining
• Factory Lining
• Custom FRP Manufacturing
• Decorative Epoxy Applications

Which service do you need?
`,



    contact: `
For product enquiries and quotations, you can contact the Sifan Fibrotech team.

You can also use the WhatsApp Enquiry button below.
`,



    location: `
Our listed location is:

${COMPANY.location}

For exact directions or a visit, please contact our team.
`

};


/* QUESTION KEYWORDS*/

const questions = [

    {
        keywords: [
            "hello",
            "hi",
            "hey",
            "namaste",
            "good morning",
            "good evening"
        ],

        answer: `
Hello! 👋

Welcome to Sifan Fibrotech.

I can help you with our FRP products, services and quotation enquiries.

What are you looking for?
`
    },


    {
        keywords: [
            "electrical enclosure",
            "frp enclosure",
            "electrical box",
            "frp electrical box",
            "electric box"
        ],

        answer:
            answers.enclosure
    },


    {
        keywords: [
            "frp tank",
            "fiber tank",
            "fiberglass tank",
            "storage tank",
            "water tank"
        ],

        answer:
            answers.tank
    },


    {
        keywords: [
            "motor box",
            "frp motor box",
            "motor enclosure"
        ],

        answer:
            answers.motorBox
    },


    {
        keywords: [
            "tank lining",
            "frp lining",
            "factory lining",
            "lining"
        ],

        answer:
            answers.lining
    },


    {
        keywords: [
            "automotive",
            "car part",
            "bike part",
            "vehicle part",
            "frp car"
        ],

        answer:
            answers.automotive
    },


    {
        keywords: [
            "marine",
            "boat",
            "ship",
            "marine component"
        ],

        answer:
            answers.marine
    },


    {
        keywords: [
            "decorative",
            "decoration",
            "sculpture",
            "sculptural"
        ],

        answer:
            answers.decorative
    },


    {
        keywords: [
            "epoxy table",
            "river table",
            "epoxy art"
        ],

        answer:
            answers.epoxyTable
    },


    {
        keywords: [
            "custom frp",
            "custom product",
            "custom manufacturing",
            "manufacturing"
        ],

        answer:
            answers.custom
    },


    {
        keywords: [
            "price",
            "cost",
            "rate",
            "how much",
            "pricing"
        ],

        answer:
            answers.price
    },


    {
        keywords: [
            "quotation",
            "quote",
            "estimate",
            "enquiry",
            "inquiry",
            "order"
        ],

        answer:
            answers.quotation
    },


    {
        keywords: [
            "waterproof",
            "water proof"
        ],

        answer:
            answers.waterproof
    },


    {
        keywords: [
            "shockproof",
            "shock proof",
            "electric shock"
        ],

        answer:
            answers.shockproof
    },


    {
        keywords: [
            "products",
            "product"
        ],

        answer:
            answers.products
    },


    {
        keywords: [
            "services",
            "service"
        ],

        answer:
            answers.services
    },


    {
        keywords: [
            "contact",
            "phone",
            "call",
            "whatsapp"
        ],

        answer:
            answers.contact
    },


    {
        keywords: [
            "location",
            "address",
            "where are you",
            "where is your office"
        ],

        answer:
            answers.location
    },


    {
        keywords: [
            "thank you",
            "thanks",
            "thank"
        ],

        answer: `
You're welcome! 😊

If you need an FRP product or quotation, just tell me what you need.
`
    }

];


/* =========================================
   NORMALIZE TEXT
========================================= */

function cleanText(text) {

    return text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, " ")
        .replace(/\s+/g, " ")
        .trim();

}


/* =========================================
   FIND ANSWER
========================================= */

function getAnswer(userText) {

    const text =
        cleanText(userText);


    let bestAnswer = null;

    let bestScore = 0;


    for (const question of questions) {

        let score = 0;


        for (const keyword of question.keywords) {

            const key =
                cleanText(keyword);


            if (text.includes(key)) {

                /*
                   Longer keywords get
                   higher priority.
                */

                score +=
                    key.split(" ").length;

            }

        }


        if (score > bestScore) {

            bestScore = score;

            bestAnswer =
                question.answer;

        }

    }


    if (bestAnswer) {

        return bestAnswer;

    }


    /* =====================================
       FALLBACK
    ===================================== */

    return `
I'm sorry, I couldn't understand that completely.

I can help you with:

• FRP Electrical Enclosures
• FRP Tanks
• FRP Motor Boxes
• FRP Tank Lining
• Factory Lining
• FRP Automotive Components
• FRP Marine Components
• Custom FRP Manufacturing
• Epoxy Tables

You can also type "quotation" to start an enquiry.
`;

}


/* =========================================
   HTML ELEMENTS
========================================= */

const chat =
    document.getElementById(
        "sfChat"
    );


const toggle =
    document.getElementById(
        "sfChatToggle"
    );


const closeButton =
    document.getElementById(
        "sfClose"
    );


const messages =
    document.getElementById(
        "sfMessages"
    );


const form =
    document.getElementById(
        "sfForm"
    );


const input =
    document.getElementById(
        "sfInput"
    );


/* =========================================
   OPEN CHAT
========================================= */

toggle.addEventListener(
    "click",
    function () {

        chat.classList.add(
            "open"
        );

        input.focus();

    }
);


/* =========================================
   CLOSE CHAT
========================================= */

closeButton.addEventListener(
    "click",
    function () {

        chat.classList.remove(
            "open"
        );

    }
);


/* =========================================
   ADD MESSAGE
========================================= */

function addMessage(
    text,
    type
) {

    const message =
        document.createElement(
            "div"
        );


    message.className =
        "sf-msg " + type;


    message.textContent =
        text;


    messages.appendChild(
        message
    );


    messages.scrollTop =
        messages.scrollHeight;

}


/* =========================================
   BOT REPLY
========================================= */

function sendToBot(
    question
) {

    /*
       Typing animation
    */

    const typing =
        document.createElement(
            "div"
        );


    typing.className =
        "sf-msg bot";


    typing.textContent =
        "Typing...";


    messages.appendChild(
        typing
    );


    messages.scrollTop =
        messages.scrollHeight;


    setTimeout(
        function () {

            typing.remove();


            const answer =
                getAnswer(
                    question
                );


            addMessage(
                answer,
                "bot"
            );

        },

        400

    );

}


/* FORM SUBMIT*/

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const question =
            input.value.trim();


        if (!question) {

            return;

        }


        addMessage(
            question,
            "user"
        );


        input.value = "";


        sendToBot(
            question
        );

    }
);


/* BUTTONS */

const quickButtons =
    document.querySelectorAll(
        ".sf-quick button"
    );


quickButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const question =
                    button.dataset.question;


                addMessage(
                    question,
                    "user"
                );


                sendToBot(
                    question
                );

            }
        );

    }
);


/* WHATSAPP BUTTON */

const whatsapp =
    document.getElementById(
        "sfWhatsapp"
    );


if (COMPANY.whatsapp) {

    const message =
        encodeURIComponent(
            "Hello Sifan Fibrotech, I would like to enquire about your FRP products/services."
        );


    whatsapp.href =
        "https://wa.me/" +
        COMPANY.whatsapp +
        "?text=" +
        message;

} else {

    whatsapp.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            alert(
                "Please add your WhatsApp number in script.js"
            );

        }
    );

}
