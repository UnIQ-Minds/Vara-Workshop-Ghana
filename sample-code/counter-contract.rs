#![no_std]
#![feature(allocator_api)]

use gear_std::prelude::*;

#[derive(Default)]
pub struct Counter {
    value: u32,
}

impl Counter {
    // Increment the counter value by 1
    pub fn increment(&mut self) {
        self.value += 1;
    }

    // Return the current counter value
    pub fn get_value(&self) -> u32 {
        self.value
    }
}

impl gear::Contract for Counter {
    // Handle method calls (e.g., increment the counter)
    fn call(&mut self, method: u32) {
        match method {
            1 => self.increment(),
            _ => {}
        }
    }
}
