<?php

declare(strict_types=1);

namespace Dhii\Container;

use ArrayIterator;
use Dhii\Collection\ClearableContainerInterface;
use Dhii\Collection\MutableContainerInterface;
use Dhii\Collection\WritableContainerInterface;
use Dhii\Collection\WritableMapInterface;
use Dhii\Container\Exception\ContainerException;
use Dhii\Container\Exception\NotFoundException;
use IteratorAggregate;
use Traversable;

/**
 * A container that does nothing.
 *
 * This can be used if an actual implementation is not available,
 * without extra checks or nullables - just as if it was a real one.
 */
class NoOpContainer implements
    MutableContainerInterface,
    IteratorAggregate,
    WritableMapInterface,
    ClearableContainerInterface
{
    /**
     * @inheritDoc
     */
    public function get($id)
    {
        throw new NotFoundException('NoOp container cannot have values');
    }

    /**
     * @inheritDoc
     */
    public function has($id)
    {
        return false;
    }

    /**
     * @inheritDoc
     */
    public function set(string $key, $value): void
    {
        // Do nothing
    }

    /**
     * @inheritDoc
     */
    public function unset(string $key): void
    {
        throw new ContainerException('NoOp container cannot have values');
    }

    /**
     * @inheritDoc
     */
    public function clear(): void
    {
        // Do nothing
    }

    /**
     * @inheritDoc
     */
    public function withMappings(array $mappings): WritableContainerInterface
    {
        return clone $this;
    }

    /**
     * @inheritDoc
     */
    public function withAddedMappings(array $mappings): WritableContainerInterface
    {
        return clone $this;
    }

    /**
     * @inheritDoc
     */
    public function withoutKeys(array $keys): WritableContainerInterface
    {
        return clone $this;
    }

    /**
     * @inheritDoc
     */
    public function getIterator(): Traversable
    {
        return new ArrayIterator([]);
    }
}
