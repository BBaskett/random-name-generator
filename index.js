class Row {
    constructor(a, b, c, d, e, f, g) {
        this.title = a;
        this.name = b;
        this.surname = c;
        this.gender = d;
        this.region = e;
        this.age = f;
        this.date_of_birth = g;
    }
    create() {
        const group = document.createElement('ul');
        group.className = 'list-group list-group-horizontal';
        Object.keys(this).forEach(key => {
            const item = document.createElement('li');
            item.className = 'list-group-item';
            item.textContent = this[key];
            group.appendChild(item)
        });
        return document.querySelector('body>div#listContainer').appendChild(group);
    }
}

const retrieveNames = async (a) => {
    const res = await fetch(`http://uinames.com/api/?amount=${a}&ext`);
    const json = await res.json();
    for (i in json) {
        new Row(json[i].title, json[i].name, json[i].surname, json[i].gender, json[i].region, json[i].age, json[i].birthday.mdy).create();
    }
    console.log(json);
}

function validate() {
    var inputCount = document.querySelector('input#count');
    if (inputCount.value > 500) {
        alert('The number of names to return cannot exceed 500!');
        console.error('Input too large');
    } else {
        retrieveNames(inputCount.value);
    }
}