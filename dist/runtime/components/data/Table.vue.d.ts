import type { PropType, AriaAttributes } from 'vue';
import type { TableRow, TableColumn, Strategy, Button, ProgressColor, ProgressAnimation, DeepPartial, Expanded } from '../../types/index.js';
declare const config: {
    wrapper: string;
    base: string;
    divide: string;
    thead: string;
    tbody: string;
    caption: string;
    tr: {
        base: string;
        selected: string;
        expanded: string;
        active: string;
    };
    th: {
        base: string;
        padding: string;
        color: string;
        font: string;
        size: string;
    };
    td: {
        base: string;
        padding: string;
        color: string;
        font: string;
        size: string;
    };
    checkbox: {
        padding: string;
    };
    loadingState: {
        wrapper: string;
        label: string;
        icon: string;
    };
    emptyState: {
        wrapper: string;
        label: string;
        icon: string;
    };
    expand: {
        icon: string;
    };
    progress: {
        wrapper: string;
    };
    default: {
        sortAscIcon: string;
        sortDescIcon: string;
        sortButton: {
            icon: string;
            trailing: boolean;
            square: boolean;
            color: import("../../types/button").ButtonColor;
            variant: import("../../types/button").ButtonVariant;
            class: string;
        };
        expandButton: {
            icon: string;
            color: import("../../types/button").ButtonColor;
            variant: import("../../types/button").ButtonVariant;
            size: import("../../types/button").ButtonSize;
            class: string;
        };
        checkbox: {
            color: import("../../types/checkbox").CheckboxColor;
        };
        progress: {
            color: ProgressColor;
            animation: ProgressAnimation;
        };
        loadingState: {
            icon: string;
            label: string;
        };
        emptyState: {
            icon: string;
            label: string;
        };
    };
};
declare function defaultComparator<T>(a: T, z: T): boolean;
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: any;
    };
    by: {
        type: (StringConstructor | FunctionConstructor)[];
        default: () => typeof defaultComparator;
    };
    rows: {
        type: PropType<TableRow[]>;
        default: () => any[];
    };
    columns: {
        type: PropType<TableColumn[]>;
        default: any;
    };
    columnAttribute: {
        type: StringConstructor;
        default: string;
    };
    sort: {
        type: PropType<{
            column: string;
            direction: "asc" | "desc";
        }>;
        default: () => {};
    };
    sortMode: {
        type: PropType<"manual" | "auto">;
        default: string;
    };
    sortButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    sortAscIcon: {
        type: StringConstructor;
        default: () => string;
    };
    sortDescIcon: {
        type: StringConstructor;
        default: () => string;
    };
    expandButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    expand: {
        type: PropType<Expanded<TableRow>>;
        default: () => any;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingState: {
        type: PropType<{
            icon: string;
            label: string;
        } | null>;
        default: () => {
            icon: string;
            label: string;
        };
    };
    emptyState: {
        type: PropType<{
            icon: string;
            label: string;
        }>;
        default: () => {
            icon: string;
            label: string;
        };
    };
    caption: {
        type: StringConstructor;
        default: any;
    };
    progress: {
        type: PropType<{
            color: ProgressColor;
            animation: ProgressAnimation;
        }>;
        default: () => {
            color: ProgressColor;
            animation: ProgressAnimation;
        };
    };
    class: {
        type: PropType<any>;
        default: () => string;
    };
    ui: {
        type: PropType<DeepPartial<typeof config> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
    multipleExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    singleSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    ui: import("vue").ComputedRef<{
        wrapper: string;
        base: string;
        divide: string;
        thead: string;
        tbody: string;
        caption: string;
        tr: {
            base: string;
            selected: string;
            expanded: string;
            active: string;
        };
        th: {
            base: string;
            padding: string;
            color: string;
            font: string;
            size: string;
        };
        td: {
            base: string;
            padding: string;
            color: string;
            font: string;
            size: string;
        };
        checkbox: {
            padding: string;
        };
        loadingState: {
            wrapper: string;
            label: string;
            icon: string;
        };
        emptyState: {
            wrapper: string;
            label: string;
            icon: string;
        };
        expand: {
            icon: string;
        };
        progress: {
            wrapper: string;
        };
        default: {
            sortAscIcon: string;
            sortDescIcon: string;
            sortButton: {
                icon: string;
                trailing: boolean;
                square: boolean;
                color: import("../../types/button").ButtonColor;
                variant: import("../../types/button").ButtonVariant;
                class: string;
            };
            expandButton: {
                icon: string;
                color: import("../../types/button").ButtonColor;
                variant: import("../../types/button").ButtonVariant;
                size: import("../../types/button").ButtonSize;
                class: string;
            };
            checkbox: {
                color: import("../../types/checkbox").CheckboxColor;
            };
            progress: {
                color: ProgressColor;
                animation: ProgressAnimation;
            };
            loadingState: {
                icon: string;
                label: string;
            };
            emptyState: {
                icon: string;
                label: string;
            };
        };
    }>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    sort: import("vue").Ref<{
        column: string;
        direction: "asc" | "desc";
    }, {
        column: string;
        direction: "asc" | "desc";
    }>;
    columns: import("vue").ComputedRef<TableColumn[]>;
    rows: import("vue").ComputedRef<TableRow[]>;
    selected: import("vue").WritableComputedRef<unknown[], unknown[]>;
    indeterminate: import("vue").ComputedRef<boolean>;
    emptyState: import("vue").ComputedRef<{
        icon: string;
        label: string;
    }>;
    loadingState: import("vue").ComputedRef<{
        icon: string;
        label: string;
    }>;
    isAllRowChecked: import("vue").ComputedRef<boolean>;
    onChangeCheckbox: (checked: boolean, row: TableRow) => void;
    isSelected: (row: TableRow) => boolean;
    onSort: (column: {
        key: string;
        direction?: "asc" | "desc";
    }) => void;
    onSelect: (row: TableRow) => void;
    onContextmenu: (event: any, row: any) => void;
    onChange: (checked: boolean) => void;
    getRowData: (row: TableRow, rowKey: string | string[], defaultValue?: any) => any;
    toggleOpened: (row: TableRow) => void;
    getAriaSort: (column: TableColumn) => AriaAttributes["aria-sort"];
    isExpanded: (row: TableRow) => boolean;
    shouldRenderColumnInFirstPlace: (index: number, key: string) => boolean;
    retriggerSlot: import("vue").Ref<any, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "update:sort" | "update:expand" | "select:all")[], "update:modelValue" | "update:sort" | "update:expand" | "select:all", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: any;
    };
    by: {
        type: (StringConstructor | FunctionConstructor)[];
        default: () => typeof defaultComparator;
    };
    rows: {
        type: PropType<TableRow[]>;
        default: () => any[];
    };
    columns: {
        type: PropType<TableColumn[]>;
        default: any;
    };
    columnAttribute: {
        type: StringConstructor;
        default: string;
    };
    sort: {
        type: PropType<{
            column: string;
            direction: "asc" | "desc";
        }>;
        default: () => {};
    };
    sortMode: {
        type: PropType<"manual" | "auto">;
        default: string;
    };
    sortButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    sortAscIcon: {
        type: StringConstructor;
        default: () => string;
    };
    sortDescIcon: {
        type: StringConstructor;
        default: () => string;
    };
    expandButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    expand: {
        type: PropType<Expanded<TableRow>>;
        default: () => any;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingState: {
        type: PropType<{
            icon: string;
            label: string;
        } | null>;
        default: () => {
            icon: string;
            label: string;
        };
    };
    emptyState: {
        type: PropType<{
            icon: string;
            label: string;
        }>;
        default: () => {
            icon: string;
            label: string;
        };
    };
    caption: {
        type: StringConstructor;
        default: any;
    };
    progress: {
        type: PropType<{
            color: ProgressColor;
            animation: ProgressAnimation;
        }>;
        default: () => {
            color: ProgressColor;
            animation: ProgressAnimation;
        };
    };
    class: {
        type: PropType<any>;
        default: () => string;
    };
    ui: {
        type: PropType<DeepPartial<typeof config> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
    multipleExpand: {
        type: BooleanConstructor;
        default: boolean;
    };
    singleSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onUpdate:sort"?: (...args: any[]) => any;
    "onUpdate:expand"?: (...args: any[]) => any;
    "onSelect:all"?: (...args: any[]) => any;
}>, {
    sort: {
        column: string;
        direction: "asc" | "desc";
    };
    class: any;
    ui: {
        wrapper?: string;
        base?: string;
        divide?: string;
        thead?: string;
        tbody?: string;
        caption?: string;
        tr?: DeepPartial<{
            base: string;
            selected: string;
            expanded: string;
            active: string;
        }, any>;
        th?: DeepPartial<{
            base: string;
            padding: string;
            color: string;
            font: string;
            size: string;
        }, any>;
        td?: DeepPartial<{
            base: string;
            padding: string;
            color: string;
            font: string;
            size: string;
        }, any>;
        checkbox?: DeepPartial<{
            padding: string;
        }, any>;
        loadingState?: DeepPartial<{
            wrapper: string;
            label: string;
            icon: string;
        }, any>;
        emptyState?: DeepPartial<{
            wrapper: string;
            label: string;
            icon: string;
        }, any>;
        expand?: DeepPartial<{
            icon: string;
        }, any>;
        progress?: DeepPartial<{
            wrapper: string;
        }, any>;
        default?: DeepPartial<{
            sortAscIcon: string;
            sortDescIcon: string;
            sortButton: {
                icon: string;
                trailing: boolean;
                square: boolean;
                color: import("../../types/button").ButtonColor;
                variant: import("../../types/button").ButtonVariant;
                class: string;
            };
            expandButton: {
                icon: string;
                color: import("../../types/button").ButtonColor;
                variant: import("../../types/button").ButtonVariant;
                size: import("../../types/button").ButtonSize;
                class: string;
            };
            checkbox: {
                color: import("../../types/checkbox").CheckboxColor;
            };
            progress: {
                color: ProgressColor;
                animation: ProgressAnimation;
            };
            loadingState: {
                icon: string;
                label: string;
            };
            emptyState: {
                icon: string;
                label: string;
            };
        }, any>;
    } & {
        [key: string]: any;
    } & {
        strategy?: Strategy;
    };
    caption: string;
    columns: TableColumn[];
    progress: {
        color: ProgressColor;
        animation: ProgressAnimation;
    };
    modelValue: unknown[];
    loading: boolean;
    loadingState: {
        icon: string;
        label: string;
    };
    emptyState: {
        icon: string;
        label: string;
    };
    expand: Expanded<TableRow>;
    by: string | Function;
    rows: TableRow[];
    columnAttribute: string;
    sortMode: "auto" | "manual";
    sortButton: Button;
    sortAscIcon: string;
    sortDescIcon: string;
    expandButton: Button;
    multipleExpand: boolean;
    singleSelect: boolean;
}, {}, {
    UIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        name: {
            type: StringConstructor;
            required: true;
        };
        mode: {
            type: PropType<"svg" | "css">;
            required: false;
            default: any;
        };
        size: {
            type: (StringConstructor | NumberConstructor)[];
            required: false;
            default: any;
        };
        customize: {
            type: FunctionConstructor;
            required: false;
            default: any;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        name: {
            type: StringConstructor;
            required: true;
        };
        mode: {
            type: PropType<"svg" | "css">;
            required: false;
            default: any;
        };
        size: {
            type: (StringConstructor | NumberConstructor)[];
            required: false;
            default: any;
        };
        customize: {
            type: FunctionConstructor;
            required: false;
            default: any;
        };
    }>> & Readonly<{}>, {
        mode: "svg" | "css";
        size: string | number;
        customize: Function;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    UButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        block: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
            default: any;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        padded: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: PropType<import("../../types/button").ButtonSize>;
            default: () => string;
            validator(value: string): boolean;
        };
        color: {
            type: PropType<import("../../types/button").ButtonColor>;
            default: () => string;
            validator(value: string): boolean;
        };
        variant: {
            type: PropType<import("../../types/button").ButtonVariant>;
            default: () => string;
            validator(value: string): boolean;
        };
        icon: {
            type: StringConstructor;
            default: any;
        };
        loadingIcon: {
            type: StringConstructor;
            default: () => string;
        };
        leadingIcon: {
            type: StringConstructor;
            default: any;
        };
        trailingIcon: {
            type: StringConstructor;
            default: any;
        };
        trailing: {
            type: BooleanConstructor;
            default: boolean;
        };
        leading: {
            type: BooleanConstructor;
            default: boolean;
        };
        square: {
            type: BooleanConstructor;
            default: boolean;
        };
        truncate: {
            type: BooleanConstructor;
            default: boolean;
        };
        class: {
            type: PropType<any>;
            default: () => "";
        };
        ui: {
            type: PropType<DeepPartial<{
                base: string;
                font: string;
                rounded: string;
                truncate: string;
                block: string;
                inline: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                gap: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                padding: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                square: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                color: {
                    white: {
                        solid: string;
                        ghost: string;
                    };
                    gray: {
                        solid: string;
                        ghost: string;
                        link: string;
                    };
                    black: {
                        solid: string;
                        link: string;
                    };
                };
                variant: {
                    solid: string;
                    outline: string;
                    soft: string;
                    ghost: string;
                    link: string;
                };
                icon: {
                    base: string;
                    loading: string;
                    size: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                    };
                };
                default: {
                    size: string;
                    variant: string;
                    color: string;
                    loadingIcon: string;
                };
            }> & {
                strategy?: Strategy;
            }>;
            default: () => {};
        };
        to: {
            readonly type: PropType<import("vue-router").RouteLocationRaw>;
            readonly default: any;
            readonly required: false;
        };
        href: {
            readonly type: PropType<import("vue-router").RouteLocationRaw>;
            readonly default: any;
            readonly required: false;
        };
        target: {
            readonly type: PropType<import("#app").NuxtLinkProps["target"]>;
            readonly default: any;
            readonly required: false;
        };
        rel: {
            readonly type: PropType<any>;
            readonly default: any;
            readonly required: false;
        };
        noRel: {
            readonly type: PropType<import("#app").NuxtLinkProps["noRel"]>;
            readonly default: any;
            readonly required: false;
        };
        prefetch: {
            readonly type: PropType<import("#app").NuxtLinkProps["prefetch"]>;
            readonly default: any;
            readonly required: false;
        };
        noPrefetch: {
            readonly type: PropType<import("#app").NuxtLinkProps["noPrefetch"]>;
            readonly default: any;
            readonly required: false;
        };
        activeClass: {
            readonly type: PropType<import("#app").NuxtLinkProps["activeClass"]>;
            readonly default: any;
            readonly required: false;
        };
        exactActiveClass: {
            readonly type: PropType<import("#app").NuxtLinkProps["exactActiveClass"]>;
            readonly default: any;
            readonly required: false;
        };
        prefetchedClass: {
            readonly type: PropType<import("#app").NuxtLinkProps["prefetchedClass"]>;
            readonly default: any;
            readonly required: false;
        };
        replace: {
            readonly type: PropType<import("#app").NuxtLinkProps["replace"]>;
            readonly default: any;
            readonly required: false;
        };
        ariaCurrentValue: {
            readonly type: PropType<import("#app").NuxtLinkProps["ariaCurrentValue"]>;
            readonly default: any;
            readonly required: false;
        };
        external: {
            readonly type: PropType<import("#app").NuxtLinkProps["external"]>;
            readonly default: any;
            readonly required: false;
        };
    }>, {
        ui: import("vue").ComputedRef<{
            base: string;
            font: string;
            rounded: string;
            truncate: string;
            block: string;
            inline: string;
            size: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            gap: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            padding: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            square: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            color: {
                white: {
                    solid: string;
                    ghost: string;
                };
                gray: {
                    solid: string;
                    ghost: string;
                    link: string;
                };
                black: {
                    solid: string;
                    link: string;
                };
            };
            variant: {
                solid: string;
                outline: string;
                soft: string;
                ghost: string;
                link: string;
            };
            icon: {
                base: string;
                loading: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
            };
            default: {
                size: string;
                variant: string;
                color: string;
                loadingIcon: string;
            };
        }>;
        attrs: import("vue").ComputedRef<Pick<{
            [x: string]: unknown;
        }, string>>;
        isLeading: import("vue").ComputedRef<string | true>;
        isTrailing: import("vue").ComputedRef<string | true>;
        isSquare: import("vue").ComputedRef<boolean>;
        buttonClass: import("vue").ComputedRef<string>;
        leadingIconName: import("vue").ComputedRef<string>;
        trailingIconName: import("vue").ComputedRef<string>;
        leadingIconClass: import("vue").ComputedRef<string>;
        trailingIconClass: import("vue").ComputedRef<string>;
        linkProps: import("vue").ComputedRef<{}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        block: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
            default: any;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        padded: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: PropType<import("../../types/button").ButtonSize>;
            default: () => string;
            validator(value: string): boolean;
        };
        color: {
            type: PropType<import("../../types/button").ButtonColor>;
            default: () => string;
            validator(value: string): boolean;
        };
        variant: {
            type: PropType<import("../../types/button").ButtonVariant>;
            default: () => string;
            validator(value: string): boolean;
        };
        icon: {
            type: StringConstructor;
            default: any;
        };
        loadingIcon: {
            type: StringConstructor;
            default: () => string;
        };
        leadingIcon: {
            type: StringConstructor;
            default: any;
        };
        trailingIcon: {
            type: StringConstructor;
            default: any;
        };
        trailing: {
            type: BooleanConstructor;
            default: boolean;
        };
        leading: {
            type: BooleanConstructor;
            default: boolean;
        };
        square: {
            type: BooleanConstructor;
            default: boolean;
        };
        truncate: {
            type: BooleanConstructor;
            default: boolean;
        };
        class: {
            type: PropType<any>;
            default: () => "";
        };
        ui: {
            type: PropType<DeepPartial<{
                base: string;
                font: string;
                rounded: string;
                truncate: string;
                block: string;
                inline: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                gap: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                padding: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                square: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                color: {
                    white: {
                        solid: string;
                        ghost: string;
                    };
                    gray: {
                        solid: string;
                        ghost: string;
                        link: string;
                    };
                    black: {
                        solid: string;
                        link: string;
                    };
                };
                variant: {
                    solid: string;
                    outline: string;
                    soft: string;
                    ghost: string;
                    link: string;
                };
                icon: {
                    base: string;
                    loading: string;
                    size: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                    };
                };
                default: {
                    size: string;
                    variant: string;
                    color: string;
                    loadingIcon: string;
                };
            }> & {
                strategy?: Strategy;
            }>;
            default: () => {};
        };
        to: {
            readonly type: PropType<import("vue-router").RouteLocationRaw>;
            readonly default: any;
            readonly required: false;
        };
        href: {
            readonly type: PropType<import("vue-router").RouteLocationRaw>;
            readonly default: any;
            readonly required: false;
        };
        target: {
            readonly type: PropType<import("#app").NuxtLinkProps["target"]>;
            readonly default: any;
            readonly required: false;
        };
        rel: {
            readonly type: PropType<any>;
            readonly default: any;
            readonly required: false;
        };
        noRel: {
            readonly type: PropType<import("#app").NuxtLinkProps["noRel"]>;
            readonly default: any;
            readonly required: false;
        };
        prefetch: {
            readonly type: PropType<import("#app").NuxtLinkProps["prefetch"]>;
            readonly default: any;
            readonly required: false;
        };
        noPrefetch: {
            readonly type: PropType<import("#app").NuxtLinkProps["noPrefetch"]>;
            readonly default: any;
            readonly required: false;
        };
        activeClass: {
            readonly type: PropType<import("#app").NuxtLinkProps["activeClass"]>;
            readonly default: any;
            readonly required: false;
        };
        exactActiveClass: {
            readonly type: PropType<import("#app").NuxtLinkProps["exactActiveClass"]>;
            readonly default: any;
            readonly required: false;
        };
        prefetchedClass: {
            readonly type: PropType<import("#app").NuxtLinkProps["prefetchedClass"]>;
            readonly default: any;
            readonly required: false;
        };
        replace: {
            readonly type: PropType<import("#app").NuxtLinkProps["replace"]>;
            readonly default: any;
            readonly required: false;
        };
        ariaCurrentValue: {
            readonly type: PropType<import("#app").NuxtLinkProps["ariaCurrentValue"]>;
            readonly default: any;
            readonly required: false;
        };
        external: {
            readonly type: PropType<import("#app").NuxtLinkProps["external"]>;
            readonly default: any;
            readonly required: false;
        };
    }>> & Readonly<{}>, {
        type: string;
        size: import("../../types/button").ButtonSize;
        class: any;
        to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric;
        disabled: boolean;
        ui: {
            base?: string;
            font?: string;
            rounded?: string;
            truncate?: string;
            block?: string;
            inline?: string;
            size?: DeepPartial<{
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            }, any>;
            gap?: DeepPartial<{
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            }, any>;
            padding?: DeepPartial<{
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            }, any>;
            square?: DeepPartial<{
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            }, any>;
            color?: DeepPartial<{
                white: {
                    solid: string;
                    ghost: string;
                };
                gray: {
                    solid: string;
                    ghost: string;
                    link: string;
                };
                black: {
                    solid: string;
                    link: string;
                };
            }, any>;
            variant?: DeepPartial<{
                solid: string;
                outline: string;
                soft: string;
                ghost: string;
                link: string;
            }, any>;
            icon?: DeepPartial<{
                base: string;
                loading: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
            }, any>;
            default?: DeepPartial<{
                size: string;
                variant: string;
                color: string;
                loadingIcon: string;
            }, any>;
        } & {
            [key: string]: any;
        } & {
            strategy?: Strategy;
        };
        color: import("../../types/button").ButtonColor;
        variant: import("../../types/button").ButtonVariant;
        truncate: boolean;
        target: "_blank" | "_parent" | "_self" | "_top" | (string & {});
        activeClass: string;
        exactActiveClass: string;
        ariaCurrentValue: "page" | "step" | "location" | "date" | "time" | "true" | "false";
        replace: boolean;
        noRel: boolean;
        prefetch: boolean;
        noPrefetch: boolean;
        prefetchedClass: string;
        external: boolean;
        leading: boolean;
        href: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric;
        rel: any;
        label: string;
        icon: string;
        block: boolean;
        square: boolean;
        loading: boolean;
        padded: boolean;
        loadingIcon: string;
        leadingIcon: string;
        trailingIcon: string;
        trailing: boolean;
    }, {}, {
        UIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            name: {
                type: StringConstructor;
                required: true;
            };
            mode: {
                type: PropType<"svg" | "css">;
                required: false;
                default: any;
            };
            size: {
                type: (StringConstructor | NumberConstructor)[];
                required: false;
                default: any;
            };
            customize: {
                type: FunctionConstructor;
                required: false;
                default: any;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            name: {
                type: StringConstructor;
                required: true;
            };
            mode: {
                type: PropType<"svg" | "css">;
                required: false;
                default: any;
            };
            size: {
                type: (StringConstructor | NumberConstructor)[];
                required: false;
                default: any;
            };
            customize: {
                type: FunctionConstructor;
                required: false;
                default: any;
            };
        }>> & Readonly<{}>, {
            mode: "svg" | "css";
            size: string | number;
            customize: Function;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        ULink: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            as: {
                type: StringConstructor;
                default: string;
            };
            type: {
                type: StringConstructor;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            active: {
                type: BooleanConstructor;
                default: any;
            };
            exact: {
                type: BooleanConstructor;
                default: boolean;
            };
            exactQuery: {
                type: PropType<boolean | "partial">;
                default: boolean;
            };
            exactHash: {
                type: BooleanConstructor;
                default: boolean;
            };
            inactiveClass: {
                type: StringConstructor;
                default: any;
            };
            to: {
                readonly type: PropType<import("vue-router").RouteLocationRaw>;
                readonly default: any;
                readonly required: false;
            };
            href: {
                readonly type: PropType<import("vue-router").RouteLocationRaw>;
                readonly default: any;
                readonly required: false;
            };
            target: {
                readonly type: PropType<import("#app").NuxtLinkProps["target"]>;
                readonly default: any;
                readonly required: false;
            };
            rel: {
                readonly type: PropType<any>;
                readonly default: any;
                readonly required: false;
            };
            noRel: {
                readonly type: PropType<import("#app").NuxtLinkProps["noRel"]>;
                readonly default: any;
                readonly required: false;
            };
            prefetch: {
                readonly type: PropType<import("#app").NuxtLinkProps["prefetch"]>;
                readonly default: any;
                readonly required: false;
            };
            noPrefetch: {
                readonly type: PropType<import("#app").NuxtLinkProps["noPrefetch"]>;
                readonly default: any;
                readonly required: false;
            };
            activeClass: {
                readonly type: PropType<import("#app").NuxtLinkProps["activeClass"]>;
                readonly default: any;
                readonly required: false;
            };
            exactActiveClass: {
                readonly type: PropType<import("#app").NuxtLinkProps["exactActiveClass"]>;
                readonly default: any;
                readonly required: false;
            };
            prefetchedClass: {
                readonly type: PropType<import("#app").NuxtLinkProps["prefetchedClass"]>;
                readonly default: any;
                readonly required: false;
            };
            replace: {
                readonly type: PropType<import("#app").NuxtLinkProps["replace"]>;
                readonly default: any;
                readonly required: false;
            };
            ariaCurrentValue: {
                readonly type: PropType<import("#app").NuxtLinkProps["ariaCurrentValue"]>;
                readonly default: any;
                readonly required: false;
            };
            external: {
                readonly type: PropType<import("#app").NuxtLinkProps["external"]>;
                readonly default: any;
                readonly required: false;
            };
        }>, {
            resolveLinkClass: (route: any, $route: any, { isActive, isExactActive }: {
                isActive: boolean;
                isExactActive: boolean;
            }) => string;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            as: {
                type: StringConstructor;
                default: string;
            };
            type: {
                type: StringConstructor;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            active: {
                type: BooleanConstructor;
                default: any;
            };
            exact: {
                type: BooleanConstructor;
                default: boolean;
            };
            exactQuery: {
                type: PropType<boolean | "partial">;
                default: boolean;
            };
            exactHash: {
                type: BooleanConstructor;
                default: boolean;
            };
            inactiveClass: {
                type: StringConstructor;
                default: any;
            };
            to: {
                readonly type: PropType<import("vue-router").RouteLocationRaw>;
                readonly default: any;
                readonly required: false;
            };
            href: {
                readonly type: PropType<import("vue-router").RouteLocationRaw>;
                readonly default: any;
                readonly required: false;
            };
            target: {
                readonly type: PropType<import("#app").NuxtLinkProps["target"]>;
                readonly default: any;
                readonly required: false;
            };
            rel: {
                readonly type: PropType<any>;
                readonly default: any;
                readonly required: false;
            };
            noRel: {
                readonly type: PropType<import("#app").NuxtLinkProps["noRel"]>;
                readonly default: any;
                readonly required: false;
            };
            prefetch: {
                readonly type: PropType<import("#app").NuxtLinkProps["prefetch"]>;
                readonly default: any;
                readonly required: false;
            };
            noPrefetch: {
                readonly type: PropType<import("#app").NuxtLinkProps["noPrefetch"]>;
                readonly default: any;
                readonly required: false;
            };
            activeClass: {
                readonly type: PropType<import("#app").NuxtLinkProps["activeClass"]>;
                readonly default: any;
                readonly required: false;
            };
            exactActiveClass: {
                readonly type: PropType<import("#app").NuxtLinkProps["exactActiveClass"]>;
                readonly default: any;
                readonly required: false;
            };
            prefetchedClass: {
                readonly type: PropType<import("#app").NuxtLinkProps["prefetchedClass"]>;
                readonly default: any;
                readonly required: false;
            };
            replace: {
                readonly type: PropType<import("#app").NuxtLinkProps["replace"]>;
                readonly default: any;
                readonly required: false;
            };
            ariaCurrentValue: {
                readonly type: PropType<import("#app").NuxtLinkProps["ariaCurrentValue"]>;
                readonly default: any;
                readonly required: false;
            };
            external: {
                readonly type: PropType<import("#app").NuxtLinkProps["external"]>;
                readonly default: any;
                readonly required: false;
            };
        }>> & Readonly<{}>, {
            type: string;
            to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric;
            disabled: boolean;
            target: "_blank" | "_parent" | "_self" | "_top" | (string & {});
            activeClass: string;
            exactActiveClass: string;
            ariaCurrentValue: "page" | "step" | "location" | "date" | "time" | "true" | "false";
            replace: boolean;
            noRel: boolean;
            prefetch: boolean;
            noPrefetch: boolean;
            prefetchedClass: string;
            external: boolean;
            as: string;
            active: boolean;
            exact: boolean;
            exactQuery: boolean | "partial";
            exactHash: boolean;
            inactiveClass: string;
            href: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric;
            rel: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    UProgress: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: {
            type: NumberConstructor;
            default: any;
        };
        max: {
            type: (NumberConstructor | {
                (arrayLength: number): any[];
                (...items: any[]): any[];
                new (arrayLength: number): any[];
                new (...items: any[]): any[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
                from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                of<T>(...items: T[]): T[];
                fromAsync<T>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>): Promise<T[]>;
                fromAsync<T, U>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>, mapFn: (value: Awaited<T>) => U, thisArg?: any): Promise<Awaited<U>[]>;
                readonly [Symbol.species]: ArrayConstructor;
            })[];
            default: number;
        };
        indicator: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: PropType<ProgressAnimation>;
            default: () => string;
            validator(value: string): boolean;
        };
        size: {
            type: PropType<import("../../types/progress").ProgressSize>;
            default: () => string;
            validator(value: string): boolean;
        };
        color: {
            type: PropType<ProgressColor>;
            default: () => string;
            validator(value: string): any;
        };
        class: {
            type: PropType<any>;
            default: () => "";
        };
        ui: {
            type: PropType<DeepPartial<{
                wrapper: string;
                indicator: {
                    container: {
                        base: string;
                        width: string;
                        transition: string;
                    };
                    align: string;
                    width: string;
                    color: string;
                    size: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        '2xl': string;
                    };
                };
                progress: {
                    base: string;
                    width: string;
                    size: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        '2xl': string;
                    };
                    rounded: string;
                    track: string;
                    bar: string;
                    color: string;
                    background: string;
                    indeterminate: {
                        base: string;
                        rounded: string;
                    };
                };
                steps: {
                    base: string;
                    color: string;
                    size: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        '2xl': string;
                    };
                };
                step: {
                    base: string;
                    align: string;
                    active: string;
                    first: string;
                };
                animation: {
                    carousel: string;
                    'carousel-inverse': string;
                    swing: string;
                    elastic: string;
                };
                default: {
                    color: string;
                    size: string;
                    animation: string;
                };
            }> & {
                strategy?: Strategy;
            }>;
            default: () => {};
        };
    }>, {
        ui: import("vue").ComputedRef<{
            wrapper: string;
            indicator: {
                container: {
                    base: string;
                    width: string;
                    transition: string;
                };
                align: string;
                width: string;
                color: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                    '2xl': string;
                };
            };
            progress: {
                base: string;
                width: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                    '2xl': string;
                };
                rounded: string;
                track: string;
                bar: string;
                color: string;
                background: string;
                indeterminate: {
                    base: string;
                    rounded: string;
                };
            };
            steps: {
                base: string;
                color: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                    '2xl': string;
                };
            };
            step: {
                base: string;
                align: string;
                active: string;
                first: string;
            };
            animation: {
                carousel: string;
                'carousel-inverse': string;
                swing: string;
                elastic: string;
            };
            default: {
                color: string;
                size: string;
                animation: string;
            };
        }>;
        attrs: import("vue").ComputedRef<Pick<{
            [x: string]: unknown;
        }, string>>;
        indicatorContainerClass: import("vue").ComputedRef<string>;
        indicatorClass: import("vue").ComputedRef<string>;
        progressClass: import("vue").ComputedRef<string>;
        stepsClass: import("vue").ComputedRef<string>;
        stepClasses: (index: string | number) => string;
        isIndeterminate: import("vue").ComputedRef<boolean>;
        isSteps: import("vue").ComputedRef<boolean>;
        realMax: import("vue").ComputedRef<number>;
        percent: import("vue").ComputedRef<number>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        value: {
            type: NumberConstructor;
            default: any;
        };
        max: {
            type: (NumberConstructor | {
                (arrayLength: number): any[];
                (...items: any[]): any[];
                new (arrayLength: number): any[];
                new (...items: any[]): any[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                from<T>(iterable: Iterable<T> | ArrayLike<T>): T[];
                from<T, U>(iterable: Iterable<T> | ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): U[];
                of<T>(...items: T[]): T[];
                fromAsync<T>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T | PromiseLike<T>> | ArrayLike<T | PromiseLike<T>>): Promise<T[]>;
                fromAsync<T, U>(iterableOrArrayLike: AsyncIterable<T> | Iterable<T> | ArrayLike<T>, mapFn: (value: Awaited<T>) => U, thisArg?: any): Promise<Awaited<U>[]>;
                readonly [Symbol.species]: ArrayConstructor;
            })[];
            default: number;
        };
        indicator: {
            type: BooleanConstructor;
            default: boolean;
        };
        animation: {
            type: PropType<ProgressAnimation>;
            default: () => string;
            validator(value: string): boolean;
        };
        size: {
            type: PropType<import("../../types/progress").ProgressSize>;
            default: () => string;
            validator(value: string): boolean;
        };
        color: {
            type: PropType<ProgressColor>;
            default: () => string;
            validator(value: string): any;
        };
        class: {
            type: PropType<any>;
            default: () => "";
        };
        ui: {
            type: PropType<DeepPartial<{
                wrapper: string;
                indicator: {
                    container: {
                        base: string;
                        width: string;
                        transition: string;
                    };
                    align: string;
                    width: string;
                    color: string;
                    size: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        '2xl': string;
                    };
                };
                progress: {
                    base: string;
                    width: string;
                    size: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        '2xl': string;
                    };
                    rounded: string;
                    track: string;
                    bar: string;
                    color: string;
                    background: string;
                    indeterminate: {
                        base: string;
                        rounded: string;
                    };
                };
                steps: {
                    base: string;
                    color: string;
                    size: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                        '2xl': string;
                    };
                };
                step: {
                    base: string;
                    align: string;
                    active: string;
                    first: string;
                };
                animation: {
                    carousel: string;
                    'carousel-inverse': string;
                    swing: string;
                    elastic: string;
                };
                default: {
                    color: string;
                    size: string;
                    animation: string;
                };
            }> & {
                strategy?: Strategy;
            }>;
            default: () => {};
        };
    }>> & Readonly<{}>, {
        size: "sm" | "xs" | "2xs" | "md" | "lg" | "xl" | "2xl";
        class: any;
        max: number | any[];
        animation: "carousel" | "carousel-inverse" | "swing" | "elastic";
        ui: {
            wrapper?: string;
            indicator?: DeepPartial<{
                container: {
                    base: string;
                    width: string;
                    transition: string;
                };
                align: string;
                width: string;
                color: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                    '2xl': string;
                };
            }, any>;
            progress?: DeepPartial<{
                base: string;
                width: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                    '2xl': string;
                };
                rounded: string;
                track: string;
                bar: string;
                color: string;
                background: string;
                indeterminate: {
                    base: string;
                    rounded: string;
                };
            }, any>;
            steps?: DeepPartial<{
                base: string;
                color: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                    '2xl': string;
                };
            }, any>;
            step?: DeepPartial<{
                base: string;
                align: string;
                active: string;
                first: string;
            }, any>;
            animation?: DeepPartial<{
                carousel: string;
                'carousel-inverse': string;
                swing: string;
                elastic: string;
            }, any>;
            default?: DeepPartial<{
                color: string;
                size: string;
                animation: string;
            }, any>;
        } & {
            [key: string]: any;
        } & {
            strategy?: Strategy;
        };
        color: "primary" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";
        value: number;
        indicator: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    UCheckbox: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        id: {
            type: StringConstructor;
            default: () => any;
        };
        value: {
            type: (StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor)[];
            default: any;
        };
        modelValue: {
            type: PropType<boolean | Array<any> | null>;
            default: any;
        };
        name: {
            type: StringConstructor;
            default: any;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        indeterminate: {
            type: BooleanConstructor;
            default: any;
        };
        help: {
            type: StringConstructor;
            default: any;
        };
        label: {
            type: StringConstructor;
            default: any;
        };
        required: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: {
            type: PropType<"primary" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose">;
            default: () => string;
            validator(value: string): any;
        };
        inputClass: {
            type: StringConstructor;
            default: string;
        };
        class: {
            type: PropType<any>;
            default: () => "";
        };
        ui: {
            type: PropType<DeepPartial<{
                wrapper: string;
                container: string;
                base: string;
                form: string;
                rounded: string;
                color: string;
                background: string;
                border: string;
                ring: string;
                inner: string;
                label: string;
                required: string;
                help: string;
                default: {
                    color: string;
                };
            }> & {
                strategy?: Strategy;
            }>;
            default: () => {};
        };
    }>, {
        ui: import("vue").ComputedRef<{
            wrapper: string;
            container: string;
            base: string;
            form: string;
            rounded: string;
            color: string;
            background: string;
            border: string;
            ring: string;
            inner: string;
            label: string;
            required: string;
            help: string;
            default: {
                color: string;
            };
        }>;
        attrs: import("vue").ComputedRef<Pick<{
            [x: string]: unknown;
        }, string>>;
        toggle: import("vue").WritableComputedRef<boolean | any[], boolean | any[]>;
        inputId: string;
        name: import("vue").ComputedRef<string>;
        inputClass: import("vue").ComputedRef<string>;
        onChange: (event: Event) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        id: {
            type: StringConstructor;
            default: () => any;
        };
        value: {
            type: (StringConstructor | NumberConstructor | BooleanConstructor | ObjectConstructor)[];
            default: any;
        };
        modelValue: {
            type: PropType<boolean | Array<any> | null>;
            default: any;
        };
        name: {
            type: StringConstructor;
            default: any;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        indeterminate: {
            type: BooleanConstructor;
            default: any;
        };
        help: {
            type: StringConstructor;
            default: any;
        };
        label: {
            type: StringConstructor;
            default: any;
        };
        required: {
            type: BooleanConstructor;
            default: boolean;
        };
        color: {
            type: PropType<"primary" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose">;
            default: () => string;
            validator(value: string): any;
        };
        inputClass: {
            type: StringConstructor;
            default: string;
        };
        class: {
            type: PropType<any>;
            default: () => "";
        };
        ui: {
            type: PropType<DeepPartial<{
                wrapper: string;
                container: string;
                base: string;
                form: string;
                rounded: string;
                color: string;
                background: string;
                border: string;
                ring: string;
                inner: string;
                label: string;
                required: string;
                help: string;
                default: {
                    color: string;
                };
            }> & {
                strategy?: Strategy;
            }>;
            default: () => {};
        };
    }>> & Readonly<{
        onChange?: (...args: any[]) => any;
        "onUpdate:modelValue"?: (...args: any[]) => any;
    }>, {
        name: string;
        required: boolean;
        class: any;
        disabled: boolean;
        ui: {
            wrapper?: string;
            container?: string;
            base?: string;
            form?: string;
            rounded?: string;
            color?: string;
            background?: string;
            border?: string;
            ring?: string;
            inner?: string;
            label?: string;
            required?: string;
            help?: string;
            default?: DeepPartial<{
                color: string;
            }, any>;
        } & {
            [key: string]: any;
        } & {
            strategy?: Strategy;
        };
        color: "primary" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";
        label: string;
        id: string;
        modelValue: boolean | any[];
        value: string | number | boolean | Record<string, any>;
        help: string;
        indeterminate: boolean;
        inputClass: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
declare module 'vue' {
    interface GlobalComponents {
    }
    interface GlobalDirectives {
    }
}
declare global {
    const __VLS_intrinsicElements: __VLS_IntrinsicElements;
    const __VLS_directiveBindingRestFields: {
        instance: null;
        oldValue: null;
        modifiers: any;
        dir: any;
    };
    const __VLS_unref: typeof import('vue').unref;
    const __VLS_nativeElements: {
        a: HTMLAnchorElement;
        abbr: HTMLElement;
        address: HTMLElement;
        area: HTMLAreaElement;
        article: HTMLElement;
        aside: HTMLElement;
        audio: HTMLAudioElement;
        b: HTMLElement;
        base: HTMLBaseElement;
        bdi: HTMLElement;
        bdo: HTMLElement;
        blockquote: HTMLQuoteElement;
        body: HTMLBodyElement;
        br: HTMLBRElement;
        button: HTMLButtonElement;
        canvas: HTMLCanvasElement;
        caption: HTMLTableCaptionElement;
        cite: HTMLElement;
        code: HTMLElement;
        col: HTMLTableColElement;
        colgroup: HTMLTableColElement;
        data: HTMLDataElement;
        datalist: HTMLDataListElement;
        dd: HTMLElement;
        del: HTMLModElement;
        details: HTMLDetailsElement;
        dfn: HTMLElement;
        dialog: HTMLDialogElement;
        div: HTMLDivElement;
        dl: HTMLDListElement;
        dt: HTMLElement;
        em: HTMLElement;
        embed: HTMLEmbedElement;
        fieldset: HTMLFieldSetElement;
        figcaption: HTMLElement;
        figure: HTMLElement;
        footer: HTMLElement;
        form: HTMLFormElement;
        h1: HTMLHeadingElement;
        h2: HTMLHeadingElement;
        h3: HTMLHeadingElement;
        h4: HTMLHeadingElement;
        h5: HTMLHeadingElement;
        h6: HTMLHeadingElement;
        head: HTMLHeadElement;
        header: HTMLElement;
        hgroup: HTMLElement;
        hr: HTMLHRElement;
        html: HTMLHtmlElement;
        i: HTMLElement;
        iframe: HTMLIFrameElement;
        img: HTMLImageElement;
        input: HTMLInputElement;
        ins: HTMLModElement;
        kbd: HTMLElement;
        label: HTMLLabelElement;
        legend: HTMLLegendElement;
        li: HTMLLIElement;
        link: HTMLLinkElement;
        main: HTMLElement;
        map: HTMLMapElement;
        mark: HTMLElement;
        menu: HTMLMenuElement;
        meta: HTMLMetaElement;
        meter: HTMLMeterElement;
        nav: HTMLElement;
        noscript: HTMLElement;
        object: HTMLObjectElement;
        ol: HTMLOListElement;
        optgroup: HTMLOptGroupElement;
        option: HTMLOptionElement;
        output: HTMLOutputElement;
        p: HTMLParagraphElement;
        picture: HTMLPictureElement;
        pre: HTMLPreElement;
        progress: HTMLProgressElement;
        q: HTMLQuoteElement;
        rp: HTMLElement;
        rt: HTMLElement;
        ruby: HTMLElement;
        s: HTMLElement;
        samp: HTMLElement;
        script: HTMLScriptElement;
        search: HTMLElement;
        section: HTMLElement;
        select: HTMLSelectElement;
        slot: HTMLSlotElement;
        small: HTMLElement;
        source: HTMLSourceElement;
        span: HTMLSpanElement;
        strong: HTMLElement;
        style: HTMLStyleElement;
        sub: HTMLElement;
        summary: HTMLElement;
        sup: HTMLElement;
        table: HTMLTableElement;
        tbody: HTMLTableSectionElement;
        td: HTMLTableCellElement;
        template: HTMLTemplateElement;
        textarea: HTMLTextAreaElement;
        tfoot: HTMLTableSectionElement;
        th: HTMLTableCellElement;
        thead: HTMLTableSectionElement;
        time: HTMLTimeElement;
        title: HTMLTitleElement;
        tr: HTMLTableRowElement;
        track: HTMLTrackElement;
        u: HTMLElement;
        ul: HTMLUListElement;
        var: HTMLElement;
        video: HTMLVideoElement;
        wbr: HTMLElement;
        animate: SVGAnimateElement;
        animateMotion: SVGAnimateMotionElement;
        animateTransform: SVGAnimateTransformElement;
        circle: SVGCircleElement;
        clipPath: SVGClipPathElement;
        defs: SVGDefsElement;
        desc: SVGDescElement;
        ellipse: SVGEllipseElement;
        feBlend: SVGFEBlendElement;
        feColorMatrix: SVGFEColorMatrixElement;
        feComponentTransfer: SVGFEComponentTransferElement;
        feComposite: SVGFECompositeElement;
        feConvolveMatrix: SVGFEConvolveMatrixElement;
        feDiffuseLighting: SVGFEDiffuseLightingElement;
        feDisplacementMap: SVGFEDisplacementMapElement;
        feDistantLight: SVGFEDistantLightElement;
        feDropShadow: SVGFEDropShadowElement;
        feFlood: SVGFEFloodElement;
        feFuncA: SVGFEFuncAElement;
        feFuncB: SVGFEFuncBElement;
        feFuncG: SVGFEFuncGElement;
        feFuncR: SVGFEFuncRElement;
        feGaussianBlur: SVGFEGaussianBlurElement;
        feImage: SVGFEImageElement;
        feMerge: SVGFEMergeElement;
        feMergeNode: SVGFEMergeNodeElement;
        feMorphology: SVGFEMorphologyElement;
        feOffset: SVGFEOffsetElement;
        fePointLight: SVGFEPointLightElement;
        feSpecularLighting: SVGFESpecularLightingElement;
        feSpotLight: SVGFESpotLightElement;
        feTile: SVGFETileElement;
        feTurbulence: SVGFETurbulenceElement;
        filter: SVGFilterElement;
        foreignObject: SVGForeignObjectElement;
        g: SVGGElement;
        image: SVGImageElement;
        line: SVGLineElement;
        linearGradient: SVGLinearGradientElement;
        marker: SVGMarkerElement;
        mask: SVGMaskElement;
        metadata: SVGMetadataElement;
        mpath: SVGMPathElement;
        path: SVGPathElement;
        pattern: SVGPatternElement;
        polygon: SVGPolygonElement;
        polyline: SVGPolylineElement;
        radialGradient: SVGRadialGradientElement;
        rect: SVGRectElement;
        set: SVGSetElement;
        stop: SVGStopElement;
        svg: SVGSVGElement;
        switch: SVGSwitchElement;
        symbol: SVGSymbolElement;
        text: SVGTextElement;
        textPath: SVGTextPathElement;
        tspan: SVGTSpanElement;
        use: SVGUseElement;
        view: SVGViewElement;
    };
    type __VLS_IntrinsicElements = import('vue/jsx-runtime').JSX.IntrinsicElements;
    type __VLS_Element = import('vue/jsx-runtime').JSX.Element;
    type __VLS_GlobalComponents = import('vue').GlobalComponents & Pick<typeof import('vue'), 'Transition' | 'TransitionGroup' | 'KeepAlive' | 'Suspense' | 'Teleport'>;
    type __VLS_GlobalDirectives = import('vue').GlobalDirectives;
    type __VLS_IsAny<T> = 0 extends 1 & T ? true : false;
    type __VLS_PickNotAny<A, B> = __VLS_IsAny<A> extends true ? B : A;
    type __VLS_unknownDirective = (arg1: unknown, arg2: unknown, arg3: unknown, arg4: unknown) => void;
    type __VLS_WithComponent<N0 extends string, LocalComponents, N1 extends string, N2 extends string, N3 extends string> = N1 extends keyof LocalComponents ? N1 extends N0 ? Pick<LocalComponents, N0 extends keyof LocalComponents ? N0 : never> : {
        [K in N0]: LocalComponents[N1];
    } : N2 extends keyof LocalComponents ? N2 extends N0 ? Pick<LocalComponents, N0 extends keyof LocalComponents ? N0 : never> : {
        [K in N0]: LocalComponents[N2];
    } : N3 extends keyof LocalComponents ? N3 extends N0 ? Pick<LocalComponents, N0 extends keyof LocalComponents ? N0 : never> : {
        [K in N0]: LocalComponents[N3];
    } : N1 extends keyof __VLS_GlobalComponents ? N1 extends N0 ? Pick<__VLS_GlobalComponents, N0 extends keyof __VLS_GlobalComponents ? N0 : never> : {
        [K in N0]: __VLS_GlobalComponents[N1];
    } : N2 extends keyof __VLS_GlobalComponents ? N2 extends N0 ? Pick<__VLS_GlobalComponents, N0 extends keyof __VLS_GlobalComponents ? N0 : never> : {
        [K in N0]: __VLS_GlobalComponents[N2];
    } : N3 extends keyof __VLS_GlobalComponents ? N3 extends N0 ? Pick<__VLS_GlobalComponents, N0 extends keyof __VLS_GlobalComponents ? N0 : never> : {
        [K in N0]: __VLS_GlobalComponents[N3];
    } : {
        [K in N0]: unknown;
    };
    type __VLS_FunctionalComponentProps<T, K> = '__ctx' extends keyof __VLS_PickNotAny<K, {}> ? K extends {
        __ctx?: {
            props?: infer P;
        };
    } ? NonNullable<P> : never : T extends (props: infer P, ...args: any) => any ? P : {};
    type __VLS_IsFunction<T, K> = K extends keyof T ? __VLS_IsAny<T[K]> extends false ? unknown extends T[K] ? false : true : false : false;
    type __VLS_UnionToIntersection<U> = (U extends unknown ? (arg: U) => unknown : never) extends ((arg: infer P) => unknown) ? P : never;
    type __VLS_OverloadUnionInner<T, U = unknown> = U & T extends (...args: infer A) => infer R ? U extends T ? never : __VLS_OverloadUnionInner<T, Pick<T, keyof T> & U & ((...args: A) => R)> | ((...args: A) => R) : never;
    type __VLS_OverloadUnion<T> = Exclude<__VLS_OverloadUnionInner<(() => never) & T>, T extends () => never ? never : () => never>;
    type __VLS_ConstructorOverloads<T> = __VLS_OverloadUnion<T> extends infer F ? F extends (event: infer E, ...args: infer A) => any ? {
        [K in E & string]: (...args: A) => void;
    } : never : never;
    type __VLS_NormalizeEmits<T> = __VLS_PrettifyGlobal<__VLS_UnionToIntersection<__VLS_ConstructorOverloads<T> & {
        [K in keyof T]: T[K] extends any[] ? {
            (...args: T[K]): void;
        } : never;
    }>>;
    type __VLS_PrettifyGlobal<T> = {
        [K in keyof T]: T[K];
    } & {};
    type __VLS_PickFunctionalComponentCtx<T, K> = NonNullable<__VLS_PickNotAny<'__ctx' extends keyof __VLS_PickNotAny<K, {}> ? K extends {
        __ctx?: infer Ctx;
    } ? Ctx : never : any, T extends (props: any, ctx: infer Ctx) => any ? Ctx : any>>;
    type __VLS_UseTemplateRef<T> = Readonly<import('vue').ShallowRef<T | null>>;
    function __VLS_getVForSourceType(source: number): [number, number, number][];
    function __VLS_getVForSourceType(source: string): [string, number, number][];
    function __VLS_getVForSourceType<T extends any[]>(source: T): [
        item: T[number],
        key: number,
        index: number
    ][];
    function __VLS_getVForSourceType<T extends {
        [Symbol.iterator](): Iterator<any>;
    }>(source: T): [
        item: T extends {
            [Symbol.iterator](): Iterator<infer T1>;
        } ? T1 : never,
        key: number,
        index: undefined
    ][];
    function __VLS_getVForSourceType<T extends number | {
        [Symbol.iterator](): Iterator<any>;
    }>(source: T): [
        item: number | (Exclude<T, number> extends {
            [Symbol.iterator](): Iterator<infer T1>;
        } ? T1 : never),
        key: number,
        index: undefined
    ][];
    function __VLS_getVForSourceType<T>(source: T): [
        item: T[keyof T],
        key: keyof T,
        index: number
    ][];
    function __VLS_getSlotParams<T>(slot: T): Parameters<__VLS_PickNotAny<NonNullable<T>, (...args: any[]) => any>>;
    function __VLS_getSlotParam<T>(slot: T): Parameters<__VLS_PickNotAny<NonNullable<T>, (...args: any[]) => any>>[0];
    function __VLS_asFunctionalDirective<T>(dir: T): T extends import('vue').ObjectDirective ? NonNullable<T['created' | 'beforeMount' | 'mounted' | 'beforeUpdate' | 'updated' | 'beforeUnmount' | 'unmounted']> : T extends (...args: any) => any ? T : __VLS_unknownDirective;
    function __VLS_withScope<T, K>(ctx: T, scope: K): ctx is T & K;
    function __VLS_makeOptional<T>(t: T): {
        [K in keyof T]?: T[K];
    };
    function __VLS_nonNullable<T>(t: T): T extends null | undefined ? never : T;
    function __VLS_asFunctionalComponent<T, K = T extends new (...args: any) => any ? InstanceType<T> : unknown>(t: T, instance?: K): T extends new (...args: any) => any ? (props: (K extends {
        $props: infer Props;
    } ? Props : any) & Record<string, unknown>, ctx?: any) => __VLS_Element & {
        __ctx?: {
            attrs?: any;
            slots?: K extends {
                $slots: infer Slots;
            } ? Slots : any;
            emit?: K extends {
                $emit: infer Emit;
            } ? Emit : any;
        } & {
            props?: (K extends {
                $props: infer Props;
            } ? Props : any) & Record<string, unknown>;
            expose?(exposed: K): void;
        };
    } : T extends () => any ? (props: {}, ctx?: any) => ReturnType<T> : T extends (...args: any) => any ? T : (_: {} & Record<string, unknown>, ctx?: any) => {
        __ctx?: {
            attrs?: any;
            expose?: any;
            slots?: any;
            emit?: any;
            props?: {} & Record<string, unknown>;
        };
    };
    function __VLS_elementAsFunction<T>(tag: T, endTag?: T): (_: T & Record<string, unknown>) => void;
    function __VLS_functionalComponentArgsRest<T extends (...args: any) => any>(t: T): 2 extends Parameters<T>['length'] ? [any] : [];
    function __VLS_normalizeSlot<S>(s: S): S extends () => infer R ? (props: {}) => R : S;
    function __VLS_tryAsConstant<const T>(t: T): T;
}
