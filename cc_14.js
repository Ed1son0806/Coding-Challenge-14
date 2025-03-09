//Task 1 - Creating the Base Structure
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Support Ticket System</title>
</head>
<body>
    <header>
        <h1>Support Ticket System</h1>
        <nav>
            <ul>
                <li><a href="#tickets">Tickets</a></li>
                <li><a href="#stats">Statistics</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <div id="ticketContainer">
        </div>
    </main>

    <footer>
        <p>© 2025 Support Services Inc. All rights reserved.</p>
        <address>
            Contact us at: <a href="mailto:support@company.com">support@company.com</a>
        </address>
    </footer>
</body>
</html>
//Task 2 - Adding Support Tickets Dynamically
function createSupportTicket(customerName, issueDescription, priority) {
    const ticket = document.createElement('div');
    ticket.setAttribute('class', 'support-ticket');
    ticket.setAttribute('id', `ticket-${Date.now()}-${customerName.toLowerCase().replace(' ', '-')}`);

    const nameHeading = document.createElement('h2');
    nameHeading.textContent = customerName;

    const issuePara = document.createElement('p');
    issuePara.textContent = issueDescription;

    const priorityLabel = document.createElement('span');
    priorityLabel.setAttribute('class', 'priority-label');
    priorityLabel.textContent = `Priority: ${priority}`;

    const resolveButton = document.createElement('button');
    resolveButton.setAttribute('class', 'resolve-btn');
    resolveButton.textContent = 'Resolve';
    resolveButton.addEventListener('click', () => {
        ticket.remove();
    });

    ticket.appendChild(nameHeading);
    ticket.appendChild(issuePara);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);

    const container = document.getElementById('ticketContainer');
    container.appendChild(ticket);
}
.support-ticket {
    border: 1px solid #ccc;
    padding: 15px;
    margin: 10px;
    max-width: 400px;
}

.priority-label {
    display: block;
    margin: 10px 0;
    font-weight: bold;
}

.resolve-btn {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}
//Task 3 - Converting NodeLists to Arrays for Bulk Updates
// cc_14.js

function createSupportTicket(customerName, issueDescription, priority) {
    const ticket = document.createElement('div');
    ticket.setAttribute('class', `support-ticket priority-${priority.toLowerCase()}`);
    ticket.setAttribute('id', `ticket-${Date.now()}-${customerName.toLowerCase().replace(' ', '-')}`);

    const nameHeading = document.createElement('h2');
    nameHeading.textContent = customerName;

    const issuePara = document.createElement('p');
    issuePara.textContent = issueDescription;

    const priorityLabel = document.createElement('span');
    priorityLabel.setAttribute('class', 'priority-label');
    priorityLabel.textContent = `Priority: ${priority}`;

    const resolveButton = document.createElement('button');
    resolveButton.setAttribute('class', 'resolve-btn');
    resolveButton.textContent = 'Resolve';
    resolveButton.addEventListener('click', () => {
        ticket.remove();
    });

    ticket.appendChild(nameHeading);
    ticket.appendChild(issuePara);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);

    const container = document.getElementById('ticketContainer');
    container.appendChild(ticket);
}

function highlightHighPriorityTickets() {
    const highPriorityTickets = document.querySelectorAll('.priority-high');
    const ticketsArray = Array.from(highPriorityTickets);
    ticketsArray.forEach(ticket => {
        ticket.classList.add('highlight');
    });
}
.support-ticket {
    border: 1px solid #ccc;
    padding: 15px;
    margin: 10px;
    max-width: 400px;
}

.priority-label {
    display: block;
    margin: 10px 0;
    font-weight: bold;
}

.resolve-btn {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

.highlight {
    background-color: #ffe6e6;
    border: 2px solid #ff0000;
}
//Task 4 - Implementing Ticket Resolution with Event Bubbling
function createSupportTicket(customerName, issueDescription, priority) {
    const ticket = document.createElement('div');
    ticket.setAttribute('class', `support-ticket priority-${priority.toLowerCase()}`);
    ticket.setAttribute('id', `ticket-${Date.now()}-${customerName.toLowerCase().replace(' ', '-')}`);

    const nameHeading = document.createElement('h2');
    nameHeading.textContent = customerName;

    const issuePara = document.createElement('p');
    issuePara.textContent = issueDescription;

    const priorityLabel = document.createElement('span');
    priorityLabel.setAttribute('class', 'priority-label');
    priorityLabel.textContent = `Priority: ${priority}`;

    const resolveButton = document.createElement('button');
    resolveButton.setAttribute('class', 'resolve-btn');
    resolveButton.textContent = 'Resolve';
    resolveButton.addEventListener('click', (event) => {
        event.stopPropagation();
        ticket.parentNode.removeChild(ticket);
    });

    ticket.appendChild(nameHeading);
    ticket.appendChild(issuePara);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);

    const container = document.getElementById('ticketContainer');
    container.appendChild(ticket);
}

function highlightHighPriorityTickets() {
    const highPriorityTickets = document.querySelectorAll('.priority-high');
    const ticketsArray = Array.from(highPriorityTickets);
    ticketsArray.forEach(ticket => {
        ticket.classList.add('highlight');
    });
}

document.getElementById('ticketContainer').addEventListener('click', (event) => {
    console.log('Ticket container clicked! Target:', event.target);
});
//Task 5 - Additional Challenge – Inline Editing of Support Tickets
// cc_14.js

function createSupportTicket(customerName, issueDescription, priority) {
    const ticket = document.createElement('div');
    ticket.setAttribute('class', `support-ticket priority-${priority.toLowerCase()}`);
    ticket.setAttribute('id', `ticket-${Date.now()}-${customerName.toLowerCase().replace(' ', '-')}`);

    const nameHeading = document.createElement('h2');
    nameHeading.textContent = customerName;

    const issuePara = document.createElement('p');
    issuePara.textContent = issueDescription;

    const priorityLabel = document.createElement('span');
    priorityLabel.setAttribute('class', 'priority-label');
    priorityLabel.textContent = `Priority: ${priority}`;

    const resolveButton = document.createElement('button');
    resolveButton.setAttribute('class', 'resolve-btn');
    resolveButton.textContent = 'Resolve';
    resolveButton.addEventListener('click', (event) => {
        event.stopPropagation();
        ticket.parentNode.removeChild(ticket);
    });

    ticket.appendChild(nameHeading);
    ticket.appendChild(issuePara);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);

    const container = document.getElementById('ticketContainer');
    container.appendChild(ticket);

    ticket.addEventListener('dblclick', () => {
        const currentName = nameHeading.textContent;
        const currentIssue = issuePara.textContent;
        const currentPriority = priorityLabel.textContent.replace('Priority: ', '');

        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.value = currentName;

        const issueInput = document.createElement('input');
        issueInput.type = 'text';
        issueInput.value = currentIssue;

        const priorityInput = document.createElement('input');
        priorityInput.type = 'text';
        priorityInput.value = currentPriority;

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        ticket.innerHTML = '';
        ticket.appendChild(nameInput);
        ticket.appendChild(issueInput);
        ticket.appendChild(priorityInput);
        ticket.appendChild(saveButton);
        ticket.appendChild(resolveButton);

        saveButton.addEventListener('click', () => {
            const newName = nameInput.value;
            const newIssue = issueInput.value;
            const newPriority = priorityInput.value;

            ticket.setAttribute('class', `support-ticket priority-${newPriority.toLowerCase()}`);
            ticket.innerHTML = '';
            nameHeading.textContent = newName;
            issuePara.textContent = newIssue;
            priorityLabel.textContent = `Priority: ${newPriority}`;
            ticket.appendChild(nameHeading);
            ticket.appendChild(issuePara);
            ticket.appendChild(priorityLabel);
            ticket.appendChild(resolveButton);
        });
    });
}

function highlightHighPriorityTickets() {
    const highPriorityTickets = document.querySelectorAll('.priority-high');
    const ticketsArray = Array.from(highPriorityTickets);
    ticketsArray.forEach(ticket => {
        ticket.classList.add('highlight');
    });
}

document.getElementById('ticketContainer').addEventListener('click', (event) => {
    console.log('Ticket container clicked! Target:', event.target);
});