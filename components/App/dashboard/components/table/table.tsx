import React from "react";
import {Box} from "../styles/box";
import {columns, users} from "./data";
import {Table} from "@nextui-org/react";
import {RenderCell} from "./render-cell";

export const TableWrapper = () => {
	return (
		<Box
			css={{
				"& .nextui-table-container": {
					boxShadow: "none",
				},
			}}
		>
			<Table
				selectionMode="multiple"
				aria-label="Example table with custom cells"
				className="w-full h-auto min-w-full px-0 border-0 bg-pureBlack"
			>
				<Table.Header columns={columns}>
					{(column) => (
						<Table.Column
							key={column.uid}
							hideHeader={column.uid === "actions"}
							align={column.uid === "actions" ? "center" : "start"}
						>
							{column.name}
						</Table.Column>
					)}
				</Table.Header>
				<Table.Body items={users}>
					{(item) => (
						<Table.Row>
							{(columnKey) => (
								<Table.Cell>
									{RenderCell({user: item, columnKey: columnKey})}
								</Table.Cell>
							)}
						</Table.Row>
					)}
				</Table.Body>
				<Table.Pagination
					shadow
					noMargin
					align="center"
					rowsPerPage={8}
					onPageChange={(page) => console.log({page})}
				/>
			</Table>
		</Box>
	);
};
