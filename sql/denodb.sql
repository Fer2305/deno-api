create table applications (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    type varchar(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
	
)

insert into applications (name,type) values ('first-app','test')

select * from applications 