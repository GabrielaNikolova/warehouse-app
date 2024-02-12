import styled from 'styled-components';

const TableStyled = styled.table`
    border-collapse: collapse;
    margin: 1rem;
    font-size: var(--font-size-sm);
    width: auto;
    max-width: 1000px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

    thead {
        background-color: var(--green);
    }

    thead tr {
        color: var(--white);
        text-align: center;
    }

    th,
    td {
        padding: 12px 15px;
        text-align: center;
    }

    tbody tr {
        border-bottom: 1px solid var(--green);
    }
    tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    }
    tbody tr:last-of-type {
        border-bottom: 2px solid var(--green);
    }

    @media all and (max-width: 400px) {
        thead {
            display: none;
        }
        tbody tr {
        }
        th,
        td {
            display: block;
        }
        td {
            max-width: 90%;
        }
        td {
            display: flex;
            padding: 10px;
        }
    }
`;

const ContainerReports = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    width: auto;
    height: auto;

    &.clients-container {
        height: auto;
        padding-top: 15rem;
    }

    & h2 {
        text-align: center;
    }

    h3 {
        text-align: center;
    }
`;

const DivFlexStyledReports = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: auto;

    

    @media all and (max-width: 470px) {
        h3 {
        text-align: center;
    }
    }
`;

export { TableStyled, ContainerReports, DivFlexStyledReports };
