import { ContainerReports, DivFlexStyledReports } from './ReportsTable/ReportsTable.style';
import ReportsTableClients from './ReportsTable/ReportsTableClients';
import ReportsTableHishestAvailability from './ReportsTable/ReportsTableHighestAvailability';
import ReportsTableProducts from './ReportsTable/ReportsTableProducts';

export default function Reports() {
    return (
        <ContainerReports>
            <h2>Reports</h2>
            <DivFlexStyledReports>
                <ReportsTableProducts />
                <ReportsTableClients />
            </DivFlexStyledReports>
            <ReportsTableHishestAvailability />
        </ContainerReports>
    );
}
