function AdminTableHeader() {
    return (
        <div className={'admin-table-header'}>
            <AdminTableHeaderItem text='ID'/>
            <AdminTableHeaderItem text='NAME'/>
            <AdminTableHeaderItem text='OPTIONS'/>
        </div>
    )
}

function AdminTableHeaderItem({text}) {

    return (
        <div className='admin-table-header-item'>
            <h1>{text}</h1>
        </div>
    )
}

export default AdminTableHeader;