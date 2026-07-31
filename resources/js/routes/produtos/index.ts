import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ProdutoController::index
 * @see [unknown]:0
 * @route '/api/produtos'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/produtos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProdutoController::index
 * @see [unknown]:0
 * @route '/api/produtos'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProdutoController::index
 * @see [unknown]:0
 * @route '/api/produtos'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProdutoController::index
 * @see [unknown]:0
 * @route '/api/produtos'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProdutoController::index
 * @see [unknown]:0
 * @route '/api/produtos'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProdutoController::index
 * @see [unknown]:0
 * @route '/api/produtos'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProdutoController::index
 * @see [unknown]:0
 * @route '/api/produtos'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\ProdutoController::store
 * @see [unknown]:0
 * @route '/api/produtos'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/produtos',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ProdutoController::store
 * @see [unknown]:0
 * @route '/api/produtos'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProdutoController::store
 * @see [unknown]:0
 * @route '/api/produtos'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ProdutoController::store
 * @see [unknown]:0
 * @route '/api/produtos'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProdutoController::store
 * @see [unknown]:0
 * @route '/api/produtos'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ProdutoController::show
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
export const show = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/produtos/{produto}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ProdutoController::show
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
show.url = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { produto: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    produto: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        produto: args.produto,
                }

    return show.definition.url
            .replace('{produto}', parsedArgs.produto.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProdutoController::show
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
show.get = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ProdutoController::show
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
show.head = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ProdutoController::show
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
    const showForm = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ProdutoController::show
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
        showForm.get = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ProdutoController::show
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
        showForm.head = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\ProdutoController::update
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
export const update = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/produtos/{produto}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ProdutoController::update
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
update.url = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { produto: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    produto: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        produto: args.produto,
                }

    return update.definition.url
            .replace('{produto}', parsedArgs.produto.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProdutoController::update
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
update.put = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ProdutoController::update
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
update.patch = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ProdutoController::update
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
    const updateForm = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProdutoController::update
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
        updateForm.put = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ProdutoController::update
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
        updateForm.patch = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\ProdutoController::destroy
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
export const destroy = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/produtos/{produto}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ProdutoController::destroy
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
destroy.url = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { produto: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    produto: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        produto: args.produto,
                }

    return destroy.definition.url
            .replace('{produto}', parsedArgs.produto.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ProdutoController::destroy
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
destroy.delete = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ProdutoController::destroy
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
    const destroyForm = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ProdutoController::destroy
 * @see [unknown]:0
 * @route '/api/produtos/{produto}'
 */
        destroyForm.delete = (args: { produto: string | number } | [produto: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const produtos = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
show: Object.assign(show, show),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default produtos