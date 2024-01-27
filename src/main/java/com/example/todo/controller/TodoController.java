/*
 * You can use the following import statements
 *
 * import org.springframework.beans.factory.annotation.Autowired;
 * import org.springframework.web.bind.annotation.*;
 * import java.util.*;
 */

// Write your code here

package com.example.todo.controller;

import org.springframework.web.bind.annotation.RestController;
import com.example.todo.service.TodoH2Service;
import com.example.todo.model.Todo;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.ArrayList;

@RestController
public class TodoController {

    @Autowired
    private TodoH2Service todoH2Service;

    @GetMapping("/todos")
    public ArrayList<Todo> getTodos() {
        return todoH2Service.getTodos();
    }

    @GetMapping("/todos/{id}")
    public Todo getTodoById(@PathVariable("id") int id) {

        return todoH2Service.getTodoById(id);
    }

    @PostMapping("/todos")
    public Todo addTodo(@RequestBody Todo todo) {
        return todoH2Service.addTodo(todo);
    }

    @PutMapping("/todos/{id}")
    public Todo updateTodo(@RequestBody Todo todo, @PathVariable("id") int id) {

        return todoH2Service.updateTodo(todo, id);
    }

    @DeleteMapping("/todos/{id}")
    public void deleteTodo(@PathVariable("id") int id) {

        todoH2Service.deleteTodo(id);
    }
}