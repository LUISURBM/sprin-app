/*
 * Copyright 2012-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.credibanco.assessment.library.controller;

import java.util.Collection;

import com.credibanco.assessment.library.model.Libro;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

/**
 * Repository class for <code>libro</code> domain objects All method names are compliant with Spring Data naming
 * conventions so this interface can easily be extended for Spring Data.
 * See: https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories.query-methods.query-creation
 *
 * @author Luis Urbina
 */
public interface LibroRepository extends Repository<Libro, Integer> {

    /**
     * Retrieve all <code>libro</code>s from the data store.
     *
     * @return a <code>Collection</code> of <code>libro</code>s
     */
    @Transactional(readOnly = true)
    @Cacheable("libros")
    Collection<Libro> findAll() throws DataAccessException;


    /**
     * Retrieve {@link Editorial}s from the data store by first name, returning all planets
     * whose planet <i>starts</i> with the given Planet name.
     * @param planet Value to search for
     * @return a Collection of matching {@link planet}s (or an empty Collection if none
     * found)
     */
    @Query("SELECT DISTINCT libro FROM Libro libro WHERE libro.editorial LIKE :editorial%")
    @Transactional(readOnly = true)
    Collection<Libro> findByEditorial(@Param("editorial") int editorial);


    /**
     * Save an {@link libro} to the data store, either inserting or updating it.
     * @param Libro the {@link libro} to save
     */
    void save(Libro libro);


}
