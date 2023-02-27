"use strict";
(self.webpackChunk = self.webpackChunk || []).push([
    [7484], {
        7558: function(e, t, o) {
            o.r(t);
            var a = o(5248),
                r = o(4251);
            t.default = {
                csr: {
                    navigation: {
                        lists_dropdown: {
                            step_count: e => "Step " + (0, a.Rx)("en", e.currentStep, 0) + "/" + (0, a.Rx)("en", e.totalSteps, 0),
                            steps_completed: () => "Done!",
                            list_select_label: () => "To your list",
                            item_type_label: () => "Type",
                            external_resources_copy: () => "You can now add any external resource as a list item via URL, along with courses listed on Class Central.",
                            url_input_label: () => "Item URL",
                            url_input_placeholder: () => "Enter a URL",
                            next_button: () => "Next"
                        }
                    },
                    affiliate_notice: {
                        modal_title: () => "Affiliate Notice",
                        message: () => "Class Central is learner-supported. When you buy through links on our site, we may earn an affiliate commission."
                    },
                    course: {
                        content: {
                            sort: () => "Sort",
                            showing_sort_mode: e => "Showing " + e.sortMode,
                            sort_mode_cc: () => "Class Central Sort",
                            sort_mode_most_recent: () => "Most recent",
                            sort_mode_high_to_low: () => "Highest to lowest rating",
                            sort_mode_low_to_high: () => "Lowest to highest rating",
                            choose_rating: e => "Create a " + (0, a.Rx)("en", e.rating, 0) + " star review of this course",
                            review_helpful: () => "Helpful"
                        }
                    },
                    lists: {
                        title_input_label: () => "Title",
                        creator_input_label: () => "Creator",
                        add_another_item: () => "Add another item",
                        cancel: () => "Cancel",
                        save: () => "Save item",
                        added_success: () => "Item successfully added",
                        view_link: () => "View %sLink%s",
                        go_to_list: () => "Go to %syour list%s",
                        add_to_modal: {
                            title: e => "Add " + (0, a.Ys)(e.type, {
                                course: "course",
                                list: "list",
                                other: ""
                            }) + " to…",
                            saving: () => "Saving…",
                            scroll: () => "Scroll",
                            list_limit_reached: e => "List limit reached (" + (0, a.Rx)("en", e.limit, 0) + ")",
                            add_any_link: () => "Add any link to a list",
                            empty_state_copy: () => "Get started with custom lists to organize and share courses.",
                            empty_state_cta: () => "Create your first list",
                            new_list: () => "New %sList%s",
                            creating_list: () => "Creating List",
                            list_name_input_placeholder: () => "Enter a title for your list",
                            create_list_button: () => "Create list"
                        },
                        item_types: {
                            web: () => "Web",
                            video: () => "Video",
                            reading: () => "Reading",
                            degree: () => "Degree",
                            course: () => "Course",
                            list: () => "List",
                            book: () => "Book",
                            header: () => "Header",
                            document: () => "Document"
                        },
                        privacy: {
                            private: () => "Private",
                            public: () => "Public",
                            unlisted: () => "Unlisted",
                            private_info_copy: () => "Change it to allow other users to find and share your list.",
                            public_info_copy: () => "Anyone can discover and share your list.",
                            unlisted_info_copy: () => "Unlisted lists can be seen and shared by anyone with the link.",
                            current: e => "Your list privacy is currently " + (0, a.Ys)(e.privacy, {
                                private: "%sPrivate%s",
                                public: "%sPublic%s",
                                unlisted: "%sUnlisted%s",
                                other: ""
                            }) + "."
                        }
                    },
                    mark_complete: {
                        write_review_copy: () => "Share your experience about this course with other students.",
                        write_review_cta: () => "Write review",
                        completed: () => "Completed",
                        mark_as_complete: () => "Mark complete",
                        saved: () => "Successfully saved.",
                        where_title: e => "Where are my completed " + (0, a.Ys)(e.type, {
                            course: "courses",
                            list: "lists",
                            other: ""
                        }) + "?",
                        mark_as_complete_copy: e => "Marking a " + (0, a.Ys)(e.type, {
                            course: "course",
                            list: "list",
                            other: ""
                        }) + " as complete will add it to your %sEducation Profile%s — where you can organize and share your educational journey."
                    },
                    global: {
                        bookmark_course: () => "Save course",
                        bookmark_list: () => "Save list",
                        label_new: () => "New",
                        label_done: () => "Done",
                        label_cancel: () => "Cancel",
                        label_signup_free: () => "Sign up for free",
                        loading: () => "Loading…"
                    },
                    help: {
                        visit_help_center: () => "For more visit the %sClass Central Help Center%s"
                    },
                    social: {
                        copy_link: () => "Copy link",
                        link_copied: () => "Link copied"
                    },
                    catalog: {
                        results: {
                            show_button: e => "Show " + (0, a.Rx)("en", e.courseCount, 0) + " " + (0, a.Ho)(e.courseCount, 0, r.en, {
                                1: "course",
                                other: "courses"
                            })
                        }
                    }
                }
            }
        },
        7022: function(e, t, o) {
            o.r(t);
            var a = o(5248),
                r = o(4251);
            t.default = {
                csr: {
                    navigation: {
                        lists_dropdown: {
                            step_count: e => "Paso " + (0, a.Rx)("es", e.currentStep, 0) + "/" + (0, a.Rx)("es", e.totalSteps, 0),
                            steps_completed: () => "¡Hecho!",
                            list_select_label: () => "Elige lista",
                            item_type_label: () => "Tipo",
                            external_resources_copy: () => "Además de los cursos que aparecen en Class Central, ahora puedes añadir recursos externos a tu lista usando una URL.",
                            url_input_label: () => "URL del recurso",
                            url_input_placeholder: () => "Introduce una URL",
                            next_button: () => "Siguiente"
                        }
                    },
                    affiliate_notice: {
                        modal_title: () => "Anuncio de afiliación",
                        message: () => "Class Central existe gracias a sus usuarios. Cuando compras un curso a través de un enlace de nuestro sitio, puede que ganemos una comisión."
                    },
                    course: {
                        content: {
                            sort: () => "Ordenar",
                            showing_sort_mode: e => "Orden: " + e.sortMode,
                            sort_mode_cc: () => "Class Central",
                            sort_mode_most_recent: () => "Más recientes",
                            sort_mode_high_to_low: () => "Mayor puntuación",
                            sort_mode_low_to_high: () => "Menor puntuación",
                            choose_rating: e => "Dale " + (0, a.Rx)("es", e.rating, 0) + " " + (0, a.Ho)(e.rating, 0, r.es, {
                                1: "estrella",
                                other: "estrellas"
                            }) + " a este curso",
                            review_helpful: () => "Útil"
                        }
                    },
                    lists: {
                        title_input_label: () => "Título",
                        creator_input_label: () => "Creador",
                        add_another_item: () => "Añadir otro elemento",
                        cancel: () => "Cancelar",
                        save: () => "Guardar",
                        added_success: () => "Elemento añadido con éxito",
                        view_link: () => "Ver %senlace%s",
                        go_to_list: () => "Ir a %stu lista%s",
                        add_to_modal: {
                            title: e => "Añadir " + (0, a.Ys)(e.type, {
                                course: "curso",
                                list: "lista",
                                other: ""
                            }) + " a…",
                            saving: () => "Guardando…",
                            scroll: () => "Bajar",
                            list_limit_reached: e => "Límite de la lista alcanzado: (" + (0, a.Rx)("es", e.limit, 0) + ")",
                            add_any_link: () => "Añadir un enlace a una lista",
                            empty_state_copy: () => "Empieza a usar listas para organizar y compartir cursos.",
                            empty_state_cta: () => "Crea tu primera lista",
                            new_list: () => "Nueva %sLista%s",
                            creating_list: () => "Crear lista",
                            list_name_input_placeholder: () => "Introduce un título para tu lista",
                            create_list_button: () => "Crear lista"
                        },
                        item_types: {
                            web: () => "Web",
                            video: () => "Vídeo",
                            reading: () => "Texto",
                            degree: () => "Título",
                            course: () => "Curso",
                            list: () => "Lista",
                            book: () => "Libro",
                            header: () => "Seccion",
                            document: () => "Documento"
                        },
                        privacy: {
                            private: () => "Privada",
                            public: () => "Pública",
                            unlisted: () => "No listada",
                            private_info_copy: () => "Cambia su privacidad para que otros usuarios la puedan encontrar y compartir.",
                            public_info_copy: () => "Cualquiera puede encontrar y compartir tu lista.",
                            unlisted_info_copy: () => "Solo puede ser vista y compartida por quienes tienen el enlace.",
                            current: e => "Actualmente, tu lista " + (0, a.Ys)(e.privacy, {
                                private: "es %sPrivada%s",
                                public: "es %sPública%s",
                                unlisted: "%sNo esta listada%s",
                                other: ""
                            }) + "."
                        }
                    },
                    mark_complete: {
                        write_review_copy: () => "Comparte tu experiencia en este curso con otros estudiantes.",
                        write_review_cta: () => "Escribir opinión",
                        completed: () => "Completado",
                        mark_as_complete: () => "Completar",
                        saved: () => "Guardado con éxito.",
                        where_title: e => "¿Dónde están mis " + (0, a.Ys)(e.type, {
                            course: "cursos completados",
                            list: "listas completadas",
                            other: ""
                        }) + "?",
                        mark_as_complete_copy: e => (0, a.Ys)(e.type, {
                            course: "Al marcar un curso como completado, será añadido a tu %sPerfil Educativo%s",
                            list: "Al marcar una lista como completa, será añadida a tu %sPerfil Educativo%s",
                            other: ""
                        }) + " - donde puedes organizar y compartir tu recorrido educativo."
                    },
                    global: {
                        bookmark_course: () => "Guardar curso",
                        bookmark_list: () => "Guardar lista",
                        label_new: () => "Nuevo",
                        label_done: () => "Hecho",
                        label_cancel: () => "Cancelar",
                        label_signup_free: () => "Crea una cuenta gratis",
                        loading: () => "Cargando…"
                    },
                    help: {
                        visit_help_center: () => "Si quieres más información, visita el %sCentro de Ayuda de Class Central%s"
                    },
                    social: {
                        copy_link: () => "Copiar enlace",
                        link_copied: () => "Enlace copiado"
                    },
                    catalog: {
                        results: {
                            show_button: e => "Mostrar " + (0, a.Rx)("es", e.courseCount, 0) + " " + (0, a.Ho)(e.courseCount, 0, r.es, {
                                1: "curso",
                                other: "cursos"
                            })
                        }
                    }
                }
            }
        },
        5248: function(e, t, o) {
            function a(e) {
                return a[e] || (a[e] = new Intl.NumberFormat(e))
            }

            function r(e, t, o) {
                return a(e).format(t - o)
            }

            function s(e, t, o, a, r) {
                if ({}.hasOwnProperty.call(a, e)) return a[e];
                t && (e -= t);
                var s = o(e, r);
                return s in a ? a[s] : a.other
            }

            function i(e, t) {
                return {}.hasOwnProperty.call(t, e) ? t[e] : t.other
            }
            o.d(t, {
                Rx: function() {
                    return r
                },
                Ho: function() {
                    return s
                },
                Ys: function() {
                    return i
                }
            })
        },
        4251: function(e, t, o) {
            o.d(t, {
                en: function() {
                    return r
                },
                es: function() {
                    return s
                }
            });
            const a = e => {
                    const t = !String(e).split(".")[1];
                    return 1 == e && t ? "one" : "other"
                },
                r = a,
                s = e => {
                    const t = String(e).split("."),
                        o = t[0],
                        a = !t[1],
                        r = o.slice(-6);
                    return 1 == e ? "one" : 0 != o && 0 == r && a ? "many" : "other"
                }
        }
    }
]);