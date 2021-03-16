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
package com.credibanco.assessment.library.service;

import java.util.Collection;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

/**
 * Repository class for <code>Owner</code> domain objects All method names are compliant with Spring Data naming
 * conventions so this interface can easily be extended for Spring Data.
 * See: https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories.query-methods.query-creation
 *
 * @author Luis Urbina
 */
public interface EditorialRepository extends Repository<Editorial, Integer> {

    /**
     * Retrieve all <code>Editorial</code>s from the data store.
     *
     * @return a <code>Collection</code> of <code>Autor</code>s
     */
    @Transactional(readOnly = true)
    @Cacheable("editoriales")
    Collection<Editorial> findAll() throws DataAccessException;

    /**
     * Retrieve an {@link Owner} from the data store by id.
     * @param id the id to search for
     * @return the {@link Owner} if found
     */
    @Query("SELECT editorial FROM Editorial editorial WHERE editorial.firstName =:firstName")
    @Transactional(readOnly = true)
    Editorial findByFirstName(@Param("firstName") String firstName);

    /**
     * Save an {@link Editorial} to the data store, either inserting or updating it.
     * @param editorial the {@link Editorial} to save
     */
    void save(Editorial editorial);


}
