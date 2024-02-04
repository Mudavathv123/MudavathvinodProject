/*
 * You can use the following import statements
 *
 * import org.springframework.beans.factory.annotation.Autowired;
 * import org.springframework.http.HttpStatus;
 * import org.springframework.jdbc.core.JdbcTemplate;
 * import org.springframework.stereotype.Service;
 * import org.springframework.web.server.ResponseStatusException;
 * import java.util.*;
 *
 */

// Write your code here

package com.example.todo.service;

import com.example.todo.model.Todo;
import com.example.todo.model.TodoRowMapper;
import com.example.todo.repository.TodoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoH2Service implements TodoRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public ArrayList<Todo> getTodos() {
        List<Todo> listOfTodos = jdbcTemplate.query("select * from todolist", new TodoRowMapper());
        return new ArrayList<Todo>(listOfTodos);
    }

    @Override
    public Todo getTodoById(int id) {

        try {
            Todo todo = jdbcTemplate.queryForObject("select * from todolist where id = ?", new TodoRowMapper(), id);
            return todo;
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

    }

    @Override
    public Todo addTodo(Todo todo) {

        jdbcTemplate.update("insert into todolist values(?,?,?)",
                todo.getTodo(), todo.getStatus(), todo.getPriority());

        return jdbcTemplate.queryForObject("select * from todolist where todo = ? and priority = ?",
                new TodoRowMapper(),
                todo.getTodo(), todo.getPriority());
    }

    @Override
    public Todo updateTodo(Todo todo, int id) {

        try {
            if (todo.getTodo() != null)
                jdbcTemplate.update("update todolist set todo = ? where id = ?",
                        todo.getTodo(), id);
            if (todo.getStatus() != null)
                jdbcTemplate.update("update todolist set status = ? where id = ?",
                        todo.getStatus(), id);
            if (todo.getPriority() != null)
                jdbcTemplate.update("update todolist set priority = ? where id = ?",
                        todo.getPriority(), id);

            return getTodoById(id);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public void deleteTodo(int id) {

        try {
            jdbcTemplate.update("delete from todolist where id = ?", id);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

    }

}