import Form from 'next/form'

export default function HomeForm(){

    return (
        <Form className ='justify-items-center' action="/search">
            <h1>Home Form</h1>
            <div className = 'relative p-3'>
                <label className = 'p-2'>Search Term 1</label>
            <input/>
            </div>
            <div className = 'relative p-3'>
                <label className ='p-2'>Search Term 2</label>
            <input/>
            </div>
            <button className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type = 'submit'>Search</button>
        </Form>

    )
}