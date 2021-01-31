import React from 'react'
import ListItem from '../ListItem/ListItem'

function List() {

    var sampleData = [
        {
            key: 1,
            title: 'this is a sample title',
            md: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        },
        {
            key: 2,
            title: 'this is a sample title',
            md: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        },
        {
            key: 3,
            title: 'this is a sample title',
            md: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        },
        {
            key: 4,
            title: 'this is a sample title',
            md: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        },
        {
            key: 5,
            title: 'this is a sample title',
            md: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        }
    ];

    return (
        <div class="ListComp">
            {
                sampleData.map(({key, title, md}) => {
                    return(
                        <ListItem key={key} title={title} active={false} />
                    )
                })
            }
        </div>
    )
}

export default List
