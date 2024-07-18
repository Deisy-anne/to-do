
CREATE TABLE cohabitants (
    id varchar(100) primary key,
    name varchar(200) not null,
    email varchar(200)

)

CREATE TABLE house_place (
    id varchar(100) primary key,
    name varchar(200) not null,
    cohabitant varchar(200) not null
)

CREATE TABLE tasks (
    id varchar(100) primary key,
    title varchar(200) not null,
    cohabitant varchar(200) not null,
    house_place varchar(200) not null,
    last_change date not null
    foreign key (cohabitant) references cohabitants(id)
)
