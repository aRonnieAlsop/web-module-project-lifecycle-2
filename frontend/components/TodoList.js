import React from 'react'

export default class TodoList extends React.Component {
  render() {
    return (
    <div id="todos">
          <h2>Todos:</h2>
          <div>Walk the dog</div>
         {
          this.props.todos.reduce((acc, td) => {
              if (this.props.displayCompleteds || !td.completed) return 
              acc.concat(
                <TodoList
                key={td.id}
                  toggleCompleted={this.props.toggleCompleted}
                  todo={td}
                />
              )
              return acc
          }, [])
         }
        </div>
    )
  }
}
