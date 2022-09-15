
import React, { useEffect, useState } from 'react';
import { mockData } from '../utils/exampleData';
import { Item } from '../utils/itemType';
import { TablePart } from './TablePart';

const verticalWalk = (name: string, item: Item): Item | null => {
    if (item.name === name) {
        return item;
    }
    if (item.children) {
        for (const itemChild of item.children) {
            const result = verticalWalk(name, itemChild);
            if (result) {
                return result;
            }
        }
    }
    return null;
}


function SearchTable() {
    const [searchText, setSearchText] = useState<string | null>(null);
    const [tableData, setTableData] = useState<Item | null>(null);

    // 模拟从后端获得数据
    useEffect(() => {
        setTableData(mockData);
    }, [])

    const onSearchBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchText(value ? String(value).trim() : null);
    };

    const doSearch = () => {
        if (!searchText) {
            return setTableData(null);
        }
        if (!tableData) {
            return
        }
        const matched = verticalWalk(searchText!, tableData);
        setTableData(matched);
    };

    return (

        <div>
            <div>
                <input type="text" onChange={onSearchBoxChange} />
                <button onClick={doSearch}>查询</button>
            </div>
            <TablePart data={tableData} />
        </div>
    )
}

export default SearchTable;