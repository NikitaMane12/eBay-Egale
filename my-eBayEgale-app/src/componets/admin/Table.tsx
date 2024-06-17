import React from 'react';
import {
    Table,
    TableCaption,
    TableContainer,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '@chakra-ui/react';
// import { BiStar } from 'react-icons/bi';
import Rating from './Rating';

interface TableHOCProps {
    // Define any props you might pass to this component
}

const TableHOC: React.FC<TableHOCProps> = () => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Country</Th>
                        <Th>Total Visitors in last Month</Th>
                        <Th isNumeric>Average Rating</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>India</Td>
                        <Td>3000000</Td>
                        <Td isNumeric><Rating rating={4.5} /></Td>
                    </Tr>
                    <Tr>
                        <Td>America</Td>
                        <Td>20000</Td>
                        <Td isNumeric><Rating rating={4.0} /></Td>
                    </Tr>
                    <Tr>
                        <Td>United Kingdom</Td>
                        <Td>30000</Td>
                        <Td isNumeric><Rating rating={3.5} /></Td>
                    </Tr>
                    <Tr>
                        <Td>Other Countries</Td>
                        <Td>90000</Td>
                        <Td isNumeric><Rating rating={3.0} /></Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default TableHOC;
