import { DataQuery, DataSourceJsonData, SelectableValue } from '@grafana/data';

export const DIMENSIONS = {
  process_measurements: [
    'ASSERT_MSG',
    'ASSERT_REGULAR',
    'ASSERT_USER',
    'ASSERT_WARNING',
    'BACKGROUND_FLUSH_AVG',
    'CACHE_BYTES_READ_INTO',
    'CACHE_BYTES_WRITTEN_FROM',
    'CACHE_DIRTY_BYTES',
    'CACHE_USED_BYTES',
    'COMPUTED_MEMORY',
    'CONNECTIONS',
    'CURSORS_TOTAL_OPEN',
    'CURSORS_TOTAL_TIMED_OUT',
    'DB_DATA_SIZE_TOTAL',
    'DB_STORAGE_TOTAL',
    'DOCUMENT_METRICS_DELETED',
    'DOCUMENT_METRICS_INSERTED',
    'DOCUMENT_METRICS_RETURNED',
    'DOCUMENT_METRICS_UPDATED',
    'EXTRA_INFO_PAGE_FAULTS',
    'FTS_DISK_UTILIZATION',
    'FTS_MEMORY_MAPPED',
    'FTS_MEMORY_RESIDENT',
    'FTS_MEMORY_VIRTUAL',
    'FTS_PROCESS_CPU_KERNEL',
    'FTS_PROCESS_CPU_USER',
    'FTS_PROCESS_NORMALIZED_CPU_KERNEL',
    'FTS_PROCESS_NORMALIZED_CPU_USER',
    'GLOBAL_ACCESSES_NOT_IN_MEMORY',
    'GLOBAL_LOCK_CURRENT_QUEUE_READERS',
    'GLOBAL_LOCK_CURRENT_QUEUE_TOTAL',
    'GLOBAL_LOCK_CURRENT_QUEUE_WRITERS',
    'GLOBAL_PAGE_FAULT_EXCEPTIONS_THROWN',
    'INDEX_COUNTERS_BTREE_ACCESSES',
    'INDEX_COUNTERS_BTREE_HITS',
    'INDEX_COUNTERS_BTREE_MISS_RATIO',
    'INDEX_COUNTERS_BTREE_MISSES',
    'JOURNALING_COMMITS_IN_WRITE_LOCK',
    'JOURNALING_MB',
    'JOURNALING_WRITE_DATA_FILES_MB',
    'MAX_PROCESS_CPU_CHILDREN_KERNEL',
    'MAX_PROCESS_CPU_CHILDREN_USER',
    'MAX_PROCESS_CPU_KERNEL',
    'MAX_PROCESS_CPU_USER',
    'MAX_PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL',
    'MAX_PROCESS_NORMALIZED_CPU_CHILDREN_USER',
    'MAX_PROCESS_NORMALIZED_CPU_KERNEL',
    'MAX_PROCESS_NORMALIZED_CPU_USER',
    'MAX_SWAP_USAGE_FREE',
    'MAX_SWAP_USAGE_USED ',
    'MAX_SYSTEM_CPU_GUEST',
    'MAX_SYSTEM_CPU_IOWAIT',
    'MAX_SYSTEM_CPU_IRQ',
    'MAX_SYSTEM_CPU_KERNEL',
    'MAX_SYSTEM_CPU_SOFTIRQ',
    'MAX_SYSTEM_CPU_STEAL',
    'MAX_SYSTEM_CPU_USER',
    'MAX_SYSTEM_MEMORY_AVAILABLE',
    'MAX_SYSTEM_MEMORY_FREE',
    'MAX_SYSTEM_MEMORY_USED',
    'MAX_SYSTEM_NETWORK_IN',
    'MAX_SYSTEM_NETWORK_OUT',
    'MAX_SYSTEM_NORMALIZED_CPU_GUEST',
    'MAX_SYSTEM_NORMALIZED_CPU_IOWAIT',
    'MAX_SYSTEM_NORMALIZED_CPU_IRQ',
    'MAX_SYSTEM_NORMALIZED_CPU_KERNEL',
    'MAX_SYSTEM_NORMALIZED_CPU_NICE',
    'MAX_SYSTEM_NORMALIZED_CPU_SOFTIRQ',
    'MAX_SYSTEM_NORMALIZED_CPU_STEAL',
    'MAX_SYSTEM_NORMALIZED_CPU_USER',
    'MEMORY_MAPPED',
    'MEMORY_RESIDENT',
    'MEMORY_VIRTUAL',
    'NETWORK_BYTES_IN',
    'NETWORK_BYTES_OUT',
    'NETWORK_NUM_REQUESTS',
    'OP_EXECUTION_TIME_COMMANDS',
    'OP_EXECUTION_TIME_READS',
    'OP_EXECUTION_TIME_WRITES',
    'OPCOUNTER_CMD',
    'OPCOUNTER_DELETE',
    'OPCOUNTER_GETMORE',
    'OPCOUNTER_INSERT',
    'OPCOUNTER_QUERY',
    'OPCOUNTER_REPL_CMD',
    'OPCOUNTER_REPL_DELETE',
    'OPCOUNTER_REPL_INSERT',
    'OPCOUNTER_REPL_UPDATE',
    'OPCOUNTER_UPDATE',
    'OPERATIONS_SCAN_AND_ORDER',
    'OPLOG_MASTER_LAG_TIME_DIFF',
    'OPLOG_MASTER_TIME',
    'OPLOG_RATE_GB_PER_HOUR',
    'OPLOG_SLAVE_LAG_MASTER_TIME',
    'OPLOG_REPLICATION_LAG',
    'PROCESS_CPU_CHILDREN_KERNEL',
    'PROCESS_CPU_CHILDREN_USER',
    'PROCESS_CPU_KERNEL',
    'PROCESS_CPU_USER',
    'PROCESS_NORMALIZED_CPU_CHILDREN_KERNEL',
    'PROCESS_NORMALIZED_CPU_CHILDREN_USER',
    'PROCESS_NORMALIZED_CPU_KERNEL',
    'PROCESS_NORMALIZED_CPU_USER',
    'QUERY_EXECUTOR_SCANNED',
    'QUERY_EXECUTOR_SCANNED_OBJECTS',
    'QUERY_TARGETING_SCANNED_OBJECTS_PER_RETURNED',
    'QUERY_TARGETING_SCANNED_PER_RETURNED',
    'RESTARTS_IN_LAST_HOUR',
    'SWAP_USAGE_FREE',
    'SWAP_USAGE_USED',
    'SYSTEM_CPU_GUEST',
    'SYSTEM_CPU_IOWAIT',
    'SYSTEM_CPU_IRQ',
    'SYSTEM_CPU_KERNEL',
    'SYSTEM_CPU_NICE',
    'SYSTEM_CPU_SOFTIRQ',
    'SYSTEM_CPU_STEAL',
    'SYSTEM_CPU_USER',
    'SYSTEM_MEMORY_AVAILABLE',
    'SYSTEM_MEMORY_FREE',
    'SYSTEM_MEMORY_USED',
    'SYSTEM_NETWORK_IN',
    'SYSTEM_NETWORK_OUT',
    'SYSTEM_NORMALIZED_CPU_GUEST',
    'SYSTEM_NORMALIZED_CPU_IOWAIT',
    'SYSTEM_NORMALIZED_CPU_IRQ',
    'SYSTEM_NORMALIZED_CPU_KERNEL',
    'SYSTEM_NORMALIZED_CPU_NICE',
    'SYSTEM_NORMALIZED_CPU_SOFTIRQ',
    'SYSTEM_NORMALIZED_CPU_STEAL',
    'SYSTEM_NORMALIZED_CPU_USER',
    'TICKETS_AVAILABLE_READS',
    'TICKETS_AVAILABLE_WRITE',
  ],
  database_measurements: [
    'DATABASE_AVERAGE_OBJECT_SIZE',
    'DATABASE_COLLECTION_COUNT',
    'DATABASE_DATA_SIZE',
    'DATABASE_STORAGE_SIZE',
    'DATABASE_INDEX_SIZE',
    'DATABASE_INDEX_COUNT',
    'DATABASE_EXTENT_COUNT',
    'DATABASE_OBJECT_COUNT',
    'DATABASE_VIEW_COUNT',
  ],
  disk_measurements: [
    'DISK_PARTITION_IOPS_READ',
    'DISK_PARTITION_IOPS_WRITE',
    'DISK_PARTITION_IOPS_TOTAL',
    'DISK_PARTITION_UTILIZATION',
    'DISK_PARTITION_LATENCY_READ',
    'DISK_PARTITION_LATENCY_WRITE',
    'DISK_PARTITION_SPACE_FREE',
    'DISK_PARTITION_SPACE_USED',
    'DISK_PARTITION_SPACE_PERCENT_FREE',
    'DISK_PARTITION_SPACE_PERCENT_USED',
  ],
};

export const HUMANITZED_DIMENSIONS: Record<string, Array<SelectableValue<string>>> = {
  disk_measurements: DIMENSIONS['disk_measurements'].map(dim => ({
    value: dim,
    label: dim,
  })),
  database_measurements: DIMENSIONS['database_measurements'].map(dim => ({
    value: dim,
    label: dim,
  })),
  process_measurements: DIMENSIONS['process_measurements'].map(dim => ({
    value: dim,
    label: dim,
  })),
};

export const METRIC_TYPES = Object.keys(DIMENSIONS).map(metric => ({
  value: metric,
  label: metric,
}));

export const DEFAULT_PROJECT = {
  label: 'select project',
  value: '',
};

export const DEFAULT_CLUSTER = {
  label: 'select cluster',
  value: '',
};

export const DEFAULT_MONGO = {
  label: 'select mongo',
  value: '',
};

export const DEFAULT_DISK = {
  label: 'select disk',
  value: '',
};

export const DEFAULT_DATABASE = {
  label: '',
  value: '',
};

export interface Query extends DataQuery {
  project: SelectableValue<string>;
  cluster: SelectableValue<string>;
  queryType: string;
  mongo: SelectableValue<string>;
  database: SelectableValue<string>;
  disk: SelectableValue<string>;
  metric: SelectableValue<string>;
  dimension: SelectableValue<string>;
  alias: string;
}

export const defaultQuery: Partial<Query> = {
  project: DEFAULT_PROJECT,
  cluster: DEFAULT_CLUSTER,
  queryType: METRIC_TYPES[0].value,
  alias: '',
};

/**
 * These are options configured for each DataSource instance
 */
export interface DataSourceOptions extends DataSourceJsonData {
  atlasPublicKey?: string;
  apiType?: string;
}

/**
 * Value that is used in the backend, but never sent over HTTP to the frontend
 */
export interface SecureJsonData {
  atlasPrivateKey?: string;
}

export interface Project {
  id: string;
  name: string;
}

export interface Cluster {
  id: string;
  name: string;
}

export interface Mongo {
  id: string;
  name: string;
}
