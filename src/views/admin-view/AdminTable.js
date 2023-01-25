import AdminTableHeader from "./AdminTableHeader";
import AdminTableRow from "./AdminTableRow";

function AdminTable({swimmers}) {
    return (
        <div className="admin-table">
            <AdminTableHeader/>
            {swimmers.map(swimmer => {
                return <AdminTableRow swimmer={swimmer}/>
            })}
        </div>
    )
}

export default AdminTable;