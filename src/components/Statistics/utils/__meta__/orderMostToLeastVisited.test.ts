import orderMostToLeastVisited from "../orderMostToLeastVisited"

test("orders lines into most to least visited", () => {
    const lineStatuses = {
    'jubilee' : {untouched : 6, visited: 5, through: 10},
    'metropolitan' : {untouched: 16, visited: 6, through: 12},
    'piccadilly' : {untouched: 9, visited: 99, through: 23}
    }

    const order = [{id: 'piccadilly', status: {untouched: 9, visited: 99, through: 23}},{id:'metropolitan', status: {untouched: 16, visited: 6, through: 12}}, 
        {id: 'jubilee', status: {untouched : 6, visited: 5, through: 10}},
    ]

    expect(orderMostToLeastVisited(lineStatuses)).toStrictEqual(order)
})