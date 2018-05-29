const contacts = [
    {
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        email: 'jan.nowak@example.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        email: 'adam.kowalski@example.com',
    },
    {
        id: 3,
        firstName: 'Zbigniew',
        lastName: 'Koziol',
        email: 'zbigniew.koziol@example.com',
    },
    {
        id: 4,
        firstName: 'Zuzanna',
        lastName: 'Malinowska',
        email: 'z.malinowska@example.com',
    },
    {
        id: 5,
        firstName: 'Andrzej',
        lastName: 'Dudek',
        email: 'andrzej.dudek@example.com',
    }
];

let contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

let App = React.createClass ({
    render: function() {
        return (
        React.createElement('div', {className: 'app'},
            React.createElement(ContactForm, {contact: contactForm}),     
            React.createElement(Contacts, {items: contacts}, {})
            )
        );
    }
});

let Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            React.createElement('div', {className: 'contactItem'},
                React.createElement('img', {
                    className: 'contactImage',
                    src: 'https://use.fontawesome.com/releases/v5.0.13/svgs/regular/address-card.svg'
                }),
            React.createElement('p', {className: 'contactLabel'}, 'Name: ' + this.props.item.firstName),
            React.createElement('p', {className: 'contactLabel'}, 'Surname: ' + this.props.item.lastName),
            React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
            this.props.item.email
        )
      )
    )
  },
});
