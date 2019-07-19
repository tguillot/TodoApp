import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

/*Footer returns all the buttons at the bottom of the screen*/
const Footer = () => (
    <div className="centered">
        <div className="show-style">
            <span>Show: </span>
        </div>
        <div>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}> ALL </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}> Active </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}> Completed </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_DELETED}> Deleted </FilterLink>
        </div>
    </div>
)

export default Footer