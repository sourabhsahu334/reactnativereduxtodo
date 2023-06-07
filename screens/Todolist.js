import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo,completeTodo } from '../reducer/todos';



const TodoApp = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    const newTodo = {
      id: new Date().getTime().toString(),
      text: todoText,
      status:"pending"
    };
    dispatch(addTodo(newTodo));
    console.log(todos)
    setTodoText('');
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };
  
  const completechange=(todoId)=>{
    dispatch(completeTodo(todoId));
  }

  return (
    <View style={{margin:10}}>
      <Text style={{fontSize:20}}>Todo App</Text>
      <TextInput
        value={todoText}
        onChangeText={setTodoText}
        placeholder="Enter todo"
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
{ todos.todos? todos.todos.map((item)=>(
        <View style={{marginTop:30}} key={item.id}>
            <Text style={{color:"black"}}>{item.text}</Text>
          <View style={{flexDirection:"row",marginTop:5}}>
          <View style={{width:60,borderRadius:5,borderColor:"red",borderWidth:1,height:28,padding:3,marginRight:10}}>
          <TouchableOpacity
              onPress={() => handleDeleteTodo(item.id)}
            ><Text>DELETE</Text>
            </TouchableOpacity>
            </View>
            <View style={{width:70,borderRadius:5,borderColor:item.status=="complete"?"blue":"green",borderWidth:1,height:28,padding:3,marginRight:10}}>
          <TouchableOpacity
          disabled={item.status==="complete"}
              onPress={() => completechange(item.id)}
            ><Text>{item.status}</Text>
            </TouchableOpacity>
            </View></View>
           </View>
)):<Text style={{color:'black'}}></Text>}
    </View>
  );
};

export default TodoApp;
